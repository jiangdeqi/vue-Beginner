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

	module.exports = __webpack_require__(234);


/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popper");

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SelectDropdown = __webpack_require__(235);

	SelectDropdown.install = function (Vue) {
	  Vue.component(SelectDropdown.name, SelectDropdown);
	};

	module.exports = SelectDropdown;

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(236)

	/* template */
	var __vue_template__ = __webpack_require__(237)
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

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popper = __webpack_require__(56);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-select-dropdown',

	  componentName: 'select-dropdown',

	  data: function data() {
	    return {
	      popper: null
	    };
	  },
	  created: function created() {
	    this.$on('updatePopper', this.updatePopper);
	    this.$on('destroyPopper', this.destroyPopper);
	  },


	  methods: {
	    updatePopper: function updatePopper() {
	      var _this = this;

	      if (this.popper) {
	        this.$nextTick(function () {
	          _this.popper.update();
	        });
	      } else {
	        this.$nextTick(function () {
	          _this.popper = new _popper2.default(_this.$parent.$refs.reference.$el, _this.$el, {
	            gpuAcceleration: false,
	            placement: 'bottom-start',
	            boundariesPadding: 0,
	            forceAbsolute: true
	          });
	          _this.popper.onCreate(function (popper) {
	            _this.resetTransformOrigin(popper);
	          });
	        });
	      }
	    },
	    destroyPopper: function destroyPopper() {
	      var _this2 = this;

	      if (this.popper) {
	        this.resetTransformOrigin(this.popper);
	        setTimeout(function () {
	          _this2.popper.destroy();
	          _this2.popper = null;
	        }, 300);
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin(popper) {
	      var placementMap = { top: 'bottom', bottom: 'top' };
	      var placement = popper._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      popper._popper.style.transformOrigin = 'center ' + origin;
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    if (this.popper) {
	      this.popper.destroy();
	    }
	  }
	};

/***/ },

/***/ 237:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-select-dropdown"
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });