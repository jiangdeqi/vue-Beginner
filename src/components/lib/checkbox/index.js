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

	module.exports = __webpack_require__(35);


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElCheckbox = __webpack_require__(36);

	ElCheckbox.install = function (Vue) {
	  Vue.component('el-checkbox', ElCheckbox);
	};

	module.exports = ElCheckbox;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(37)

	/* template */
	var __vue_template__ = __webpack_require__(39)
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

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _emitter = __webpack_require__(38);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCheckbox',

	  mixins: [_emitter2.default],

	  props: {
	    value: {},
	    label: {
	      type: String
	    },
	    indeterminate: Boolean,
	    disabled: Boolean,
	    trueLabel: [String, Number],
	    falseLabel: [String, Number]
	  },

	  computed: {
	    _value: {
	      get: function get() {
	        return this.value !== undefined ? this.value : this.$parent.value;
	      },
	      set: function set(newValue) {
	        if (this.value !== undefined) {
	          this.$emit('input', newValue);
	        } else {
	          this.$parent.$emit('input', newValue);
	        }
	      }
	    },
	    checked: function checked() {
	      var type = Object.prototype.toString.call(this._value);

	      if (type === '[object Boolean]') {
	        return this._value;
	      } else if (type === '[object Array]') {
	        return this._value.indexOf(this.label) > -1;
	      } else if (type === '[object String]' || type === '[object Number]') {
	        return this._value === this.trueLabel;
	      }
	    }
	  },

	  data: function data() {
	    return {
	      focus: false
	    };
	  },


	  watch: {
	    checked: function checked(sure) {
	      this.$emit('change', sure);
	    }
	  }
	};

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

/***/ 39:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('label', {
	    staticClass: "el-checkbox"
	  }, [_h('span', {
	    staticClass: "el-checkbox__input"
	  }, [_h('span', {
	    staticClass: "el-checkbox__inner",
	    class: {
	      'is-disabled': disabled,
	      'is-checked': checked,
	      'is-indeterminate': indeterminate,
	      'is-focus': focus
	    }
	  }), " ", (trueLabel || falseLabel) ? _h('input', {
	    ref: "checkbox",
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "true-value": trueLabel,
	      "false-value": falseLabel,
	      "type": "checkbox",
	      "disabled": disabled
	    },
	    domProps: {
	      "checked": Array.isArray(_value) ? (_value).indexOf(null) > -1 : (_value) === (trueLabel)
	    },
	    on: {
	      "focus": function($event) {
	        focus = true
	      },
	      "blur": function($event) {
	        focus = false
	      },
	      "change": function($event) {
	        var $$a = _value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (trueLabel) : (falseLabel);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = $$a.indexOf($$v);
	          if ($$c) {
	            $$i < 0 && (_value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _value = $$c
	        }
	      }
	    }
	  }) : _h('input', {
	    staticClass: "el-checkbox__original",
	    attrs: {
	      "type": "checkbox",
	      "disabled": disabled
	    },
	    domProps: {
	      "value": label,
	      "checked": Array.isArray(_value) ? (_value).indexOf(label) > -1 : (_value) === (true)
	    },
	    on: {
	      "focus": function($event) {
	        focus = true
	      },
	      "blur": function($event) {
	        focus = false
	      },
	      "change": function($event) {
	        var $$a = _value,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = label,
	            $$i = $$a.indexOf($$v);
	          if ($$c) {
	            $$i < 0 && (_value = $$a.concat($$v))
	          } else {
	            $$i > -1 && (_value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          _value = $$c
	        }
	      }
	    }
	  }), " "]), " ", ($slots.default || label) ? _h('span', {
	    staticClass: "el-checkbox__label"
	  }, [_t("default"), " ", (!$slots.default) ? [_s(label)] : _e()]) : _e()])
	}},staticRenderFns: []}

/***/ }

/******/ });