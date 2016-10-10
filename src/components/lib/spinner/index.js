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

	module.exports = __webpack_require__(244);


/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElSpinner = __webpack_require__(245);

	ElSpinner.install = function (Vue) {
	  Vue.component(ElSpinner.name, ElSpinner);
	};

	module.exports = ElSpinner;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(246)

	/* template */
	var __vue_template__ = __webpack_require__(247)
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

/***/ 246:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElSpinner',
	  props: {
	    type: String,
	    radius: {
	      type: Number,
	      default: 100
	    },
	    strokeWidth: {
	      type: Number,
	      default: 5
	    },
	    strokeColor: {
	      type: String,
	      default: '#efefef'
	    }
	  }
	};

/***/ },

/***/ 247:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('span', {
	    staticClass: "el-spinner"
	  }, [_h('svg', {
	    staticClass: "el-spinner-inner",
	    style: ({
	      width: radius / 2 + 'px',
	      height: radius / 2 + 'px'
	    }),
	    attrs: {
	      "viewBox": "0 0 50 50"
	    }
	  }, [_h('circle', {
	    staticClass: "path",
	    attrs: {
	      "cx": "25",
	      "cy": "25",
	      "r": "20",
	      "fill": "none",
	      "stroke": strokeColor,
	      "stroke-width": strokeWidth
	    }
	  })])])
	}},staticRenderFns: []}

/***/ }

/******/ });