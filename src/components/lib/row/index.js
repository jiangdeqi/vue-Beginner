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

	module.exports = __webpack_require__(222);


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElRow = __webpack_require__(223);

	ElRow.install = function (Vue) {
	  Vue.component('el-row', ElRow);
	};

	module.exports = ElRow;

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(224)

	/* template */
	var __vue_template__ = __webpack_require__(225)
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

/***/ 224:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElRow',

	  props: {
	    gutter: Number,
	    type: String,
	    justify: {
	      type: String,
	      default: 'start'
	    },
	    align: {
	      type: String,
	      default: 'top'
	    }
	  },

	  computed: {
	    style: function style() {
	      var ret = {};

	      if (this.gutter) {
	        ret.marginLeft = '-' + this.gutter / 2 + 'px';
	        ret.marginRight = ret.marginLeft;
	      }

	      return ret;
	    }
	  }
	};

/***/ },

/***/ 225:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-row",
	    class: [
	      justify !== 'start' ? 'is-justify-' + justify : '',
	      align !== 'top' ? 'is-align-' + align : '', {
	        'el-row--flex': type === 'flex'
	      }
	    ],
	    style: (style)
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });