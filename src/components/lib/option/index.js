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

	module.exports = __webpack_require__(181);


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

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElOption = __webpack_require__(182);

	ElOption.install = function (Vue) {
	  Vue.component(ElOption.name, ElOption);
	};

	module.exports = ElOption;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(183)

	/* template */
	var __vue_template__ = __webpack_require__(184)
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

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  mixins: [_emitter2.default],

	  name: 'el-option',

	  componentName: 'option',

	  props: {
	    value: {
	      required: true
	    },
	    label: [String, Number],
	    selected: {
	      type: Boolean,
	      default: false
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
	  },

	  data: function data() {
	    return {
	      index: -1,
	      queryPassed: true,
	      hitState: false,
	      currentLabel: this.label
	    };
	  },


	  computed: {
	    parent: function parent() {
	      var result = this.$parent;
	      while (!result.isSelect) {
	        result = result.$parent;
	      }
	      return result;
	    },
	    itemSelected: function itemSelected() {
	      if (Object.prototype.toString.call(this.parent.selected) === '[object Object]') {
	        return this === this.parent.selected;
	      } else if (Array.isArray(this.parent.selected)) {
	        return this.parent.value.indexOf(this.value) > -1;
	      }
	    },
	    currentSelected: function currentSelected() {
	      return this.selected || (this.parent.multiple ? this.parent.value.indexOf(this.value) > -1 : this.parent.value === this.value);
	    }
	  },

	  watch: {
	    currentSelected: function currentSelected(val) {
	      if (val === true) {
	        this.dispatch('select', 'addOptionToValue', this);
	      }
	    }
	  },

	  methods: {
	    disableOptions: function disableOptions() {
	      this.disabled = true;
	    },
	    hoverItem: function hoverItem() {
	      if (!this.disabled) {
	        this.parent.hoverIndex = this.parent.options.indexOf(this);
	      }
	    },
	    selectOptionClick: function selectOptionClick() {
	      if (this.disabled !== true) {
	        this.dispatch('select', 'handleOptionClick', this);
	      }
	    },
	    queryChange: function queryChange(query) {
	      this.queryPassed = new RegExp(query, 'i').test(this.currentLabel);
	      if (!this.queryPassed) {
	        this.parent.filteredOptionsCount--;
	      }
	    },
	    resetIndex: function resetIndex() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.index = _this.parent.options.indexOf(_this);
	      });
	    }
	  },

	  created: function created() {
	    this.currentLabel = this.currentLabel || (typeof this.value === 'string' || typeof this.value === 'number' ? this.value : '');
	    this.parent.options.push(this);
	    this.parent.optionsCount++;
	    this.parent.filteredOptionsCount++;
	    this.index = this.parent.options.indexOf(this);

	    if (this.currentSelected === true) {
	      this.dispatch('select', 'addOptionToValue', this);
	    }

	    this.$on('queryChange', this.queryChange);
	    this.$on('disableOptions', this.disableOptions);
	    this.$on('resetIndex', this.resetIndex);
	  },
	  beforeDestroy: function beforeDestroy() {
	    this.dispatch('select', 'onOptionDestroy', this);
	  }
	};

/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    directives: [{
	      name: "show",
	      value: (queryPassed),
	      expression: "queryPassed"
	    }],
	    staticClass: "el-select-dropdown__item",
	    class: {
	      'selected': itemSelected, 'is-disabled': disabled, 'hover': parent.hoverIndex === index
	    },
	    on: {
	      "mouseenter": hoverItem,
	      "click": function($event) {
	        $event.stopPropagation();
	        selectOptionClick($event)
	      }
	    }
	  }, [_t("default", [_h('span', [_s(currentLabel)])])])
	}},staticRenderFns: []}

/***/ }

/******/ });