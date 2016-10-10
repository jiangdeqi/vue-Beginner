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

	module.exports = __webpack_require__(196);


/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Popover = __webpack_require__(197);

	Popover.install = function (Vue) {
	  Vue.component(Popover.name, Popover);
	};

	module.exports = Popover;

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(198)

	/* template */
	var __vue_template__ = __webpack_require__(201)
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

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vuePopper = __webpack_require__(199);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _vue = __webpack_require__(52);

	var _vue2 = _interopRequireDefault(_vue);

	var _event = __webpack_require__(200);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.directive('popover', {
	  bind: function bind(el, binding, vnode) {
	    vnode.context.$refs[binding.arg].$refs.reference = el;
	  }
	});

	exports.default = {
	  name: 'el-popover',

	  mixins: [_vuePopper2.default],

	  props: {
	    trigger: {
	      type: String,
	      default: 'click',
	      validator: function validator(value) {
	        return ['click', 'focus', 'hover'].indexOf(value) > -1;
	      }
	    },
	    title: String,
	    content: String,
	    reference: {},
	    width: {},
	    visibleArrow: {
	      default: true
	    },
	    transition: {
	      type: String,
	      default: 'fade-in-linear'
	    },
	    options: {
	      default: function _default() {
	        return {
	          gpuAcceleration: false
	        };
	      }
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    setTimeout(function () {
	      var _timer = void 0;
	      var reference = _this.reference || _this.$refs.reference || _this.$slots.reference[0].elm;

	      _this.$nextTick(function () {
	        if (_this.trigger === 'click') {
	          (0, _event.on)(reference, 'click', function () {
	            _this.showPopper = !_this.showPopper;
	          });
	          (0, _event.on)(document, 'click', function (e) {
	            if (!_this.$el || !reference || _this.$el.contains(e.target) || reference.contains(e.target)) return;
	            _this.showPopper = false;
	          });
	        } else if (_this.trigger === 'hover') {
	          (0, _event.on)(reference, 'mouseenter', function () {
	            _this.showPopper = true;
	            clearTimeout(_timer);
	          });
	          (0, _event.on)(reference, 'mouseleave', function () {
	            _timer = setTimeout(function () {
	              _this.showPopper = false;
	            }, 200);
	          });
	        } else {
	          if ([].slice.call(reference.children).length) {
	            var children = reference.childNodes;

	            for (var i = 0; i < children.length; i++) {
	              if (children[i].nodeName === 'INPUT') {
	                (0, _event.on)(children[i], 'focus', function () {
	                  _this.showPopper = true;
	                });
	                (0, _event.on)(children[i], 'blur', function () {
	                  _this.showPopper = false;
	                });
	                break;
	              }
	            }
	          } else if (reference.nodeName === 'INPUT' || reference.nodeName === 'TEXTAREA') {
	            (0, _event.on)(reference, 'focus', function () {
	              _this.showPopper = true;
	            });
	            (0, _event.on)(reference, 'blur', function () {
	              _this.showPopper = false;
	            });
	          } else {
	            (0, _event.on)(reference, 'mousedown', function () {
	              _this.showPopper = true;
	            });
	            (0, _event.on)(reference, 'mouseup', function () {
	              _this.showPopper = false;
	            });
	          }
	        }
	      });
	    }, 100);
	  },
	  destroyed: function destroyed() {
	    var reference = this.reference;

	    (0, _event.off)(reference, 'mouseup');
	    (0, _event.off)(reference, 'mousedown');
	    (0, _event.off)(reference, 'focus');
	    (0, _event.off)(reference, 'blur');
	    (0, _event.off)(reference, 'mouseleave');
	    (0, _event.off)(reference, 'mouseenter');
	  }
	};

/***/ },

/***/ 199:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ },

/***/ 200:
/***/ function(module, exports) {

	var bindEvent = (function() {
	  if(document.addEventListener) {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var unbindEvent = (function() {
	  if(document.removeEventListener) {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function(element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	})();

	var bindOnce = function(el, event, fn) {
	  var listener = function() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ },

/***/ 201:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('span', [_h('transition', {
	    attrs: {
	      "name": transition
	    },
	    on: {
	      "after-leave": doDestroy
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (showPopper),
	      expression: "showPopper"
	    }],
	    ref: "popper",
	    staticClass: "el-popover",
	    style: ({
	      width: width + 'px'
	    })
	  }, [(title) ? _h('div', {
	    staticClass: "el-popover__title",
	    domProps: {
	      "textContent": _s(title)
	    }
	  }) : _e(), " ", _t("default", [_s(content)])])]), " ", _t("reference")])
	}},staticRenderFns: []}

/***/ }

/******/ });