module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(226);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input");

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	function _broadcast(componentName, eventName, params) {
	  this.$children.forEach(function (child) {
	    var name = child.$options.componentName;

	    if (name === componentName) {
	      child.$emit.apply(child, [eventName].concat(params));
	    } else {
	      _broadcast.apply(child, [componentName, eventName].concat(params));
	    }
	  });
	}
	exports.default = {
	  methods: {
	    dispatch: function dispatch(componentName, eventName, params) {
	      var parent = this.$parent;
	      var name = parent.$options.componentName;

	      while (parent && (!name || name !== componentName)) {
	        parent = parent.$parent;

	        if (parent) {
	          name = parent.$options.componentName;
	        }
	      }
	      if (parent) {
	        parent.$emit.apply(parent, [eventName].concat(params));
	      }
	    },
	    broadcast: function broadcast(componentName, eventName, params) {
	      _broadcast.call(this, componentName, eventName, params);
	    }
	  }
	};

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElSelect = __webpack_require__(227);

	ElSelect.install = function (Vue) {
	  Vue.component(ElSelect.name, ElSelect);
	};

	module.exports = ElSelect;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(228)

	/* template */
	var __vue_template__ = __webpack_require__(233)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _index = __webpack_require__(8);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(229);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(230);

	var _index6 = _interopRequireDefault(_index5);

	var _debounce = __webpack_require__(231);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _clickoutside = __webpack_require__(9);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'ElSelect',

	  componentName: 'select',

	  computed: {
	    iconClass: function iconClass() {
	      return this.showCloseIcon ? 'circle-close' : this.remote && this.filterable ? '' : 'caret-top';
	    },
	    debounce: function debounce() {
	      return this.remote ? 300 : 0;
	    },
	    showCloseIcon: function showCloseIcon() {
	      var criteria = this.clearable && this.inputHovering && !this.multiple && this.options.indexOf(this.selected) > -1;
	      if (!this.$el) return false;

	      var icon = this.$el.querySelector('.el-input__icon');
	      if (icon) {
	        if (criteria) {
	          icon.addEventListener('click', this.deleteSelected);
	          icon.classList.add('is-show-close');
	        } else {
	          icon.removeEventListener('click', this.deleteSelected);
	          icon.classList.remove('is-show-close');
	        }
	      }
	      return criteria;
	    },
	    nodataText: function nodataText() {
	      if (this.loading) {
	        return '加载中';
	      } else {
	        if (this.voidRemoteQuery) {
	          this.voidRemoteQuery = false;
	          return false;
	        }
	        if (this.filteredOptionsCount === 0) {
	          return '无匹配数据';
	        }
	        if (this.options.length === 0) {
	          return '无数据';
	        }
	      }
	      return null;
	    }
	  },

	  components: {
	    ElInput: _index2.default,
	    ElSelectMenu: _index4.default,
	    ElTag: _index6.default
	  },

	  directives: {
	    ElementClickoutside: _clickoutside2.default
	  },

	  props: {
	    name: String,
	    value: {},
	    size: String,
	    disabled: Boolean,
	    clearable: Boolean,
	    filterable: Boolean,
	    loading: Boolean,
	    remote: Boolean,
	    remoteMethod: Function,
	    filterMethod: Function,
	    multiple: Boolean,
	    placeholder: {
	      type: String,
	      default: '请选择'
	    }
	  },

	  data: function data() {
	    return {
	      options: [],
	      selected: {},
	      isSelect: true,
	      inputLength: 20,
	      inputWidth: 0,
	      valueChangeBySelected: false,
	      cachedPlaceHolder: '',
	      optionsCount: 0,
	      filteredOptionsCount: 0,
	      dropdownUl: null,
	      visible: false,
	      selectedLabel: '',
	      selectInit: false,
	      hoverIndex: -1,
	      query: '',
	      voidRemoteQuery: false,
	      bottomOverflowBeforeHidden: 0,
	      optionsAllDisabled: false,
	      inputHovering: false,
	      currentPlaceholder: ''
	    };
	  },


	  watch: {
	    placeholder: function placeholder(val) {
	      this.currentPlaceholder = val;
	    },
	    value: function value(val) {
	      var _this = this;

	      if (this.valueChangeBySelected) {
	        this.valueChangeBySelected = false;
	        return;
	      }
	      this.$nextTick(function () {
	        if (_this.multiple && Array.isArray(val)) {
	          _this.$nextTick(function () {
	            _this.resetInputHeight();
	          });
	          _this.selectedInit = true;
	          _this.selected = [];
	          _this.currentPlaceholder = _this.cachedPlaceHolder;
	          val.forEach(function (item) {
	            var option = _this.options.filter(function (option) {
	              return option.value === item;
	            })[0];
	            if (option) {
	              _this.$emit('addOptionToValue', option);
	            }
	          });
	        }
	        if (!_this.multiple) {
	          var option = _this.options.filter(function (option) {
	            return option.value === val;
	          })[0];
	          if (option) {
	            _this.$emit('addOptionToValue', option);
	          } else {
	            _this.selected = {};
	            _this.selectedLabel = '';
	          }
	        }
	        _this.resetHoverIndex();
	      });
	    },
	    selected: function selected(val) {
	      var _this2 = this;

	      if (this.multiple) {
	        if (this.selectedInit) {
	          this.selectedInit = false;
	          return;
	        }
	        this.valueChangeBySelected = true;
	        var result = val.map(function (item) {
	          return item.value;
	        });

	        this.$emit('input', result);
	        this.$emit('change', result);
	        if (this.selected.length > 0) {
	          this.currentPlaceholder = '';
	        } else {
	          this.currentPlaceholder = this.cachedPlaceHolder;
	        }
	        this.$nextTick(function () {
	          _this2.resetInputHeight();
	        });
	        if (this.filterable) {
	          this.query = '';
	          this.hoverIndex = -1;
	          this.$refs.input.focus();
	          this.inputLength = 20;
	        }
	      } else {
	        this.valueChangeBySelected = true;
	        this.$emit('input', val.value);
	        this.$emit('change', val.value);
	      }
	    },
	    query: function query(val) {
	      var _this3 = this;

	      this.$nextTick(function () {
	        _this3.broadcast('select-dropdown', 'updatePopper');
	      });
	      if (this.multiple && this.filterable) {
	        this.resetInputHeight();
	      }
	      if (this.remote && typeof this.remoteMethod === 'function') {
	        this.hoverIndex = -1;
	        if (!this.multiple) {
	          this.selected = {};
	        }
	        this.remoteMethod(val);
	        this.voidRemoteQuery = val === '';
	      } else if (typeof this.filterMethod === 'function') {
	        this.filterMethod(val);
	      } else {
	        this.filteredOptionsCount = this.optionsCount;
	        this.broadcast('option', 'queryChange', val);
	      }
	    },
	    visible: function visible(val) {
	      if (!val) {
	        this.$refs.reference.$el.querySelector('input').blur();
	        if (this.$el.querySelector('.el-input__icon')) {
	          this.$el.querySelector('.el-input__icon').classList.remove('is-reverse');
	        }
	        this.broadcast('select-dropdown', 'destroyPopper');
	        if (this.$refs.input) {
	          this.$refs.input.blur();
	        }
	        this.resetHoverIndex();
	        if (!this.multiple) {
	          if (this.dropdownUl && this.selected.$el) {
	            this.bottomOverflowBeforeHidden = this.selected.$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
	          }
	          if (this.selected && this.selected.value) {
	            this.selectedLabel = this.selected.currentLabel;
	          }
	        }
	      } else {
	        if (this.$el.querySelector('.el-input__icon')) {
	          this.$el.querySelector('.el-input__icon').classList.add('is-reverse');
	        }
	        this.broadcast('select-dropdown', 'updatePopper');
	        if (this.filterable) {
	          this.query = this.selectedLabel;
	          if (this.multiple) {
	            this.$refs.input.focus();
	          } else {
	            this.broadcast('input', 'inputSelect');
	          }
	        }
	        if (!this.dropdownUl) {
	          var dropdownChildNodes = this.$refs.popper.$el.childNodes;
	          this.dropdownUl = [].filter.call(dropdownChildNodes, function (item) {
	            return item.tagName === 'UL';
	          })[0];
	        }
	        if (!this.multiple && this.dropdownUl) {
	          if (this.bottomOverflowBeforeHidden > 0) {
	            this.dropdownUl.scrollTop += this.bottomOverflowBeforeHidden;
	          }
	        }
	      }
	    },
	    options: function options(val) {
	      this.optionsAllDisabled = val.length === val.filter(function (item) {
	        return item.disabled === true;
	      }).length;
	    }
	  },

	  methods: {
	    handleClose: function handleClose() {
	      this.visible = false;
	    },
	    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
	      if (!Array.isArray(this.selected)) return;
	      var option = this.selected[this.selected.length - 1];
	      if (!option) return;

	      if (hit === true || hit === false) {
	        option.hitState = hit;
	        return hit;
	      }

	      option.hitState = !option.hitState;
	      return option.hitState;
	    },
	    deletePrevTag: function deletePrevTag(e) {
	      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
	        this.selected.pop();
	      }
	    },
	    addOptionToValue: function addOptionToValue(option) {
	      if (this.multiple) {
	        if (this.selected.indexOf(option) === -1 && (this.remote ? this.value.indexOf(option.value) === -1 : true)) {
	          this.selectedInit = false;
	          this.selected.push(option);
	          this.resetHoverIndex();
	        }
	      } else {
	        this.selected = option;
	        this.selectedLabel = option.currentLabel;
	        this.hoverIndex = option.index;
	      }
	    },
	    managePlaceholder: function managePlaceholder() {
	      if (this.currentPlaceholder !== '') {
	        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
	      }
	    },
	    resetInputState: function resetInputState(e) {
	      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
	      this.inputLength = this.$refs.input.value.length * 12 + 20;
	    },
	    resetInputHeight: function resetInputHeight() {
	      var _this4 = this;

	      this.$nextTick(function () {
	        var inputChildNodes = _this4.$refs.reference.$el.childNodes;
	        var input = [].filter.call(inputChildNodes, function (item) {
	          return item.tagName === 'INPUT';
	        })[0];
	        input.style.height = Math.max(_this4.$refs.tags.clientHeight + 6, _this4.size === 'small' ? 28 : 36) + 'px';
	        _this4.broadcast('select-dropdown', 'updatePopper');
	      });
	    },
	    resetHoverIndex: function resetHoverIndex() {
	      var _this5 = this;

	      setTimeout(function () {
	        if (!_this5.multiple) {
	          _this5.hoverIndex = _this5.options.indexOf(_this5.selected);
	        } else {
	          if (_this5.selected.length > 0) {
	            _this5.hoverIndex = Math.min.apply(null, _this5.selected.map(function (item) {
	              return _this5.options.indexOf(item);
	            }));
	          } else {
	            _this5.hoverIndex = -1;
	          }
	        }
	      }, 300);
	    },
	    handleOptionSelect: function handleOptionSelect(option) {
	      if (!this.multiple) {
	        this.selected = option;
	        this.selectedLabel = option.currentLabel;
	        this.visible = false;
	      } else {
	        var optionIndex = -1;
	        this.selected.forEach(function (item, index) {
	          if (item === option || item.currentLabel === option.currentLabel) {
	            optionIndex = index;
	          }
	        });
	        if (optionIndex > -1) {
	          this.selected.splice(optionIndex, 1);
	        } else {
	          this.selected.push(option);
	        }
	      }
	    },
	    toggleMenu: function toggleMenu() {
	      if (this.filterable && this.query === '' && this.visible) {
	        return;
	      }
	      if (!this.disabled) {
	        this.visible = !this.visible;
	        if (this.remote && this.visible) {
	          this.selectedLabel = '';
	        }
	      }
	    },
	    navigateOptions: function navigateOptions(direction) {
	      if (!this.visible) {
	        this.visible = true;
	        return;
	      }
	      if (!this.optionsAllDisabled) {
	        if (direction === 'next') {
	          this.hoverIndex++;
	          if (this.hoverIndex === this.options.length) {
	            this.hoverIndex = 0;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || !this.options[this.hoverIndex].queryPassed) {
	            this.navigateOptions('next');
	          }
	        }
	        if (direction === 'prev') {
	          this.hoverIndex--;
	          if (this.hoverIndex < 0) {
	            this.hoverIndex = this.options.length - 1;
	          }
	          this.resetScrollTop();
	          if (this.options[this.hoverIndex].disabled === true || !this.options[this.hoverIndex].queryPassed) {
	            this.navigateOptions('prev');
	          }
	        }
	      }
	    },
	    resetScrollTop: function resetScrollTop() {
	      var bottomOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().bottom - this.$refs.popper.$el.getBoundingClientRect().bottom;
	      var topOverflowDistance = this.options[this.hoverIndex].$el.getBoundingClientRect().top - this.$refs.popper.$el.getBoundingClientRect().top;
	      if (bottomOverflowDistance > 0) {
	        this.dropdownUl.scrollTop += bottomOverflowDistance;
	      }
	      if (topOverflowDistance < 0) {
	        this.dropdownUl.scrollTop += topOverflowDistance;
	      }
	    },
	    selectOption: function selectOption() {
	      if (this.options[this.hoverIndex]) {
	        this.handleOptionSelect(this.options[this.hoverIndex]);
	      }
	    },
	    deleteSelected: function deleteSelected(event) {
	      event.stopPropagation();
	      this.selected = {};
	      this.selectedLabel = '';
	      this.$emit('input', '');
	      this.$emit('change', '');
	      this.visible = false;
	    },
	    deleteTag: function deleteTag(event, tag) {
	      if (event.target.tagName === 'I') {
	        var index = this.selected.indexOf(tag);
	        if (index > -1) {
	          this.selected.splice(index, 1);
	        }
	        event.stopPropagation();
	      }
	    },
	    onInputChange: function onInputChange() {
	      if (this.filterable) {
	        this.query = this.selectedLabel;
	      }
	    },
	    onOptionDestroy: function onOptionDestroy(option) {
	      this.optionsCount--;
	      this.filteredOptionsCount--;
	      var index = this.options.indexOf(option);
	      if (index > -1) {
	        this.options.splice(index, 1);
	      }
	      this.broadcast('option', 'resetIndex');
	    }
	  },

	  created: function created() {
	    var _this6 = this;

	    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
	    if (this.multiple) {
	      this.selectedInit = true;
	      this.selected = [];
	    }
	    if (this.remote) {
	      this.voidRemoteQuery = true;
	    }

	    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
	      _this6.onInputChange();
	    });

	    this.$on('addOptionToValue', this.addOptionToValue);
	    this.$on('handleOptionClick', this.handleOptionSelect);
	    this.$on('onOptionDestroy', this.onOptionDestroy);
	  },
	  mounted: function mounted() {
	    var _this7 = this;

	    this.$nextTick(function () {
	      if (_this7.$refs.reference.$el) {
	        _this7.inputWidth = _this7.$refs.reference.$el.getBoundingClientRect().width;
	      }
	    });
	  }
	};

/***/ },

/***/ 229:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/select-dropdown");

/***/ },

/***/ 230:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-undefined */

	var throttle = __webpack_require__(232);

	/**
	 * Debounce execution of a function. Debouncing, unlike throttling,
	 * guarantees that a function is only executed a single time, either at the
	 * very beginning of a series of calls, or at the very end.
	 *
	 * @param  {Number}   delay         A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}  atBegin       Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
	 *                                  after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
	 *                                  (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
	 * @param  {Function} callback      A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                  to `callback` when the debounced-function is executed.
	 *
	 * @return {Function} A new, debounced function.
	 */
	module.exports = function ( delay, atBegin, callback ) {
		return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
	};


/***/ },

/***/ 232:
/***/ function(module, exports) {

	/* eslint-disable no-undefined,no-param-reassign,no-shadow */

	/**
	 * Throttle execution of a function. Especially useful for rate limiting
	 * execution of handlers on events like resize and scroll.
	 *
	 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
	 * @param  {Boolean}   noTrailing     Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
	 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
	 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
	 *                                    the internal counter is reset)
	 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
	 *                                    to `callback` when the throttled-function is executed.
	 * @param  {Boolean}   debounceMode   If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
	 *                                    schedule `callback` to execute after `delay` ms.
	 *
	 * @return {Function}  A new, throttled, function.
	 */
	module.exports = function ( delay, noTrailing, callback, debounceMode ) {

		// After wrapper has stopped being called, this timeout ensures that
		// `callback` is executed at the proper times in `throttle` and `end`
		// debounce modes.
		var timeoutID;

		// Keep track of the last time `callback` was executed.
		var lastExec = 0;

		// `noTrailing` defaults to falsy.
		if ( typeof noTrailing !== 'boolean' ) {
			debounceMode = callback;
			callback = noTrailing;
			noTrailing = undefined;
		}

		// The `wrapper` function encapsulates all of the throttling / debouncing
		// functionality and when executed will limit the rate at which `callback`
		// is executed.
		function wrapper () {

			var self = this;
			var elapsed = Number(new Date()) - lastExec;
			var args = arguments;

			// Execute `callback` and update the `lastExec` timestamp.
			function exec () {
				lastExec = Number(new Date());
				callback.apply(self, args);
			}

			// If `debounceMode` is true (at begin) this is used to clear the flag
			// to allow future `callback` executions.
			function clear () {
				timeoutID = undefined;
			}

			if ( debounceMode && !timeoutID ) {
				// Since `wrapper` is being called for the first time and
				// `debounceMode` is true (at begin), execute `callback`.
				exec();
			}

			// Clear any existing timeout.
			if ( timeoutID ) {
				clearTimeout(timeoutID);
			}

			if ( debounceMode === undefined && elapsed > delay ) {
				// In throttle mode, if `delay` time has been exceeded, execute
				// `callback`.
				exec();

			} else if ( noTrailing !== true ) {
				// In trailing throttle mode, since `delay` time has not been
				// exceeded, schedule `callback` to execute `delay` ms after most
				// recent execution.
				//
				// If `debounceMode` is true (at begin), schedule `clear` to execute
				// after `delay` ms.
				//
				// If `debounceMode` is false (at end), schedule `callback` to
				// execute after `delay` ms.
				timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
			}

		}

		// Return the wrapper function.
		return wrapper;

	};


/***/ },

/***/ 233:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-select",
	    class: {
	      'is-multiple': multiple, 'is-small': size === 'small'
	    }
	  }, [(multiple) ? _h('div', {
	    ref: "tags",
	    staticClass: "el-select__tags",
	    style: ({
	      'max-width': inputWidth - 32 + 'px'
	    }),
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        toggleMenu($event)
	      }
	    }
	  }, [_h('transition-group', {
	    on: {
	      "after-leave": resetInputHeight
	    }
	  }, [(selected) && _l((selected), function(item) {
	    return _h('el-tag', {
	      key: item,
	      attrs: {
	        "closable": "",
	        "hit": item.hitState,
	        "type": "primary",
	        "close-transition": ""
	      },
	      nativeOn: {
	        "click": function($event) {
	          deleteTag($event, item)
	        }
	      }
	    }, [_s(item.currentLabel)])
	  })]), " ", (filterable) ? _h('input', {
	    directives: [{
	      name: "model",
	      value: (query),
	      expression: "query"
	    }],
	    ref: "input",
	    staticClass: "el-select__input",
	    style: ({
	      width: inputLength + 'px'
	    }),
	    attrs: {
	      "type": "text",
	      "debounce": remote ? 300 : 0
	    },
	    domProps: {
	      "value": _s(query)
	    },
	    on: {
	      "keyup": managePlaceholder,
	      "keydown": [resetInputState, function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        navigateOptions('next')
	      }, function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        navigateOptions('prev')
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        selectOption($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) return;
	        $event.preventDefault();
	        visible = false
	      }, function($event) {
	        if ($event.keyCode !== 8 && $event.keyCode !== 46) return;
	        deletePrevTag($event)
	      }],
	      "input": function($event) {
	        if ($event.target.composing) return;
	        query = $event.target.value
	      }
	    }
	  }) : _e()]) : _e(), " ", _h('el-input', {
	    directives: [{
	      name: "model",
	      value: (selectedLabel),
	      expression: "selectedLabel"
	    }, {
	      name: "element-clickoutside",
	      value: (handleClose),
	      expression: "handleClose"
	    }],
	    ref: "reference",
	    attrs: {
	      "type": "text",
	      "placeholder": currentPlaceholder,
	      "name": name,
	      "disabled": disabled,
	      "readonly": !filterable || multiple,
	      "icon": iconClass
	    },
	    domProps: {
	      "value": (selectedLabel)
	    },
	    on: {
	      "input": function($event) {
	        selectedLabel = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        toggleMenu($event)
	      },
	      "keyup": function($event) {
	        debouncedOnInputChange($event)
	      },
	      "keydown": [function($event) {
	        if ($event.keyCode !== 40) return;
	        $event.preventDefault();
	        navigateOptions('next')
	      }, function($event) {
	        if ($event.keyCode !== 38) return;
	        $event.preventDefault();
	        navigateOptions('prev')
	      }, function($event) {
	        if ($event.keyCode !== 13) return;
	        $event.preventDefault();
	        selectOption($event)
	      }, function($event) {
	        if ($event.keyCode !== 27) return;
	        $event.preventDefault();
	        visible = false
	      }, function($event) {
	        if ($event.keyCode !== 9) return;
	        visible = false
	      }],
	      "mouseenter": function($event) {
	        inputHovering = true
	      },
	      "mouseleave": function($event) {
	        inputHovering = false
	      }
	    }
	  }), " ", _h('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [_h('el-select-menu', {
	    directives: [{
	      name: "show",
	      value: (visible && nodataText !== false),
	      expression: "visible && nodataText !== false"
	    }],
	    ref: "popper"
	  }, [_h('ul', {
	    directives: [{
	      name: "show",
	      value: (options.length > 0 && filteredOptionsCount > 0 && !loading),
	      expression: "options.length > 0 && filteredOptionsCount > 0 && !loading"
	    }],
	    staticClass: "el-select-dropdown__list"
	  }, [_t("default")]), " ", (nodataText) ? _h('p', {
	    staticClass: "el-select-dropdown__nodata"
	  }, [_s(nodataText)]) : _e()])])])
	}},staticRenderFns: []}

/***/ }

/******/ });