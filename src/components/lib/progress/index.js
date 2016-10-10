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

	module.exports = __webpack_require__(202);


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElProgress = __webpack_require__(203);

	ElProgress.install = function (Vue) {
	  Vue.component(ElProgress.name, ElProgress);
	};

	module.exports = ElProgress;

/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(204)

	/* template */
	var __vue_template__ = __webpack_require__(205)
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

/***/ 204:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElProgress',
	  props: {
	    type: {
	      type: String,
	      default: 'line',
	      validator: function validator(val) {
	        return ['line', 'circle'].indexOf(val) > -1;
	      }
	    },
	    size: {
	      type: String,
	      validator: function validator(val) {
	        return !val || ['large', 'small'].indexOf(val) > -1;
	      }
	    },
	    percentage: {
	      type: Number,
	      default: 0,
	      required: true,
	      validator: function validator(val) {
	        return val >= 0 && val <= 100;
	      }
	    },
	    status: {
	      type: String
	    },
	    strokeWidth: {
	      type: Number,
	      default: 6
	    },
	    textInside: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number,
	      default: 126
	    },
	    showText: {
	      type: Boolean,
	      default: true
	    }
	  },
	  computed: {
	    barStyle: function barStyle() {
	      var style = {};
	      style.width = this.percentage + '%';
	      return style;
	    },
	    relativeStrokeWidth: function relativeStrokeWidth() {
	      return (this.strokeWidth / this.width * 100).toFixed(1);
	    },
	    trackPath: function trackPath() {
	      var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

	      return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
	    },
	    perimeter: function perimeter() {
	      var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
	      return 2 * Math.PI * radius;
	    },
	    circlePathStyle: function circlePathStyle() {
	      var perimeter = this.perimeter;
	      return {
	        strokeDasharray: perimeter + 'px,' + perimeter + 'px',
	        strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
	        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
	      };
	    },
	    stroke: function stroke() {
	      var ret;
	      switch (this.status) {
	        case 'success':
	          ret = '#13ce66';
	          break;
	        case 'exception':
	          ret = '#ff4949';
	          break;
	        default:
	          ret = '#20a0ff';
	      }
	      return ret;
	    },
	    iconClass: function iconClass() {
	      if (this.type === 'line') {
	        return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
	      } else {
	        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
	      }
	    },
	    progressTextSize: function progressTextSize() {
	      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
	    }
	  }
	};

/***/ },

/***/ 205:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-progress",
	    class: [
	      'el-progress--' + type,
	      status ? 'is-' + status : '', {
	        'el-progress--without-text': !showText,
	        'el-progress--text-inside': textInside,
	      }
	    ]
	  }, [(type === 'line') ? _h('div', {
	    staticClass: "el-progress-bar"
	  }, [_h('div', {
	    staticClass: "el-progress-bar__outer",
	    style: ({
	      height: strokeWidth + 'px'
	    })
	  }, [_h('div', {
	    staticClass: "el-progress-bar__inner",
	    style: (barStyle)
	  }, [(showText && textInside) ? _h('div', {
	    staticClass: "el-progress-bar__innerText"
	  }, [_s(percentage) + "%"]) : _e()])])]) : _h('div', {
	    staticClass: "el-progress-circle",
	    style: ({
	      height: width + 'px',
	      width: width + 'px'
	    })
	  }, [_h('svg', {
	    attrs: {
	      "viewBox": "0 0 100 100"
	    }
	  }, [_h('path', {
	    staticClass: "el-progress-circle__track",
	    attrs: {
	      "d": trackPath,
	      "stroke": "#e5e9f2",
	      "stroke-width": relativeStrokeWidth,
	      "fill": "none"
	    }
	  }), " ", _h('path', {
	    staticClass: "el-progress-circle__path",
	    style: (circlePathStyle),
	    attrs: {
	      "d": trackPath,
	      "stroke-linecap": "round",
	      "stroke": stroke,
	      "stroke-width": relativeStrokeWidth,
	      "fill": "none"
	    }
	  })])]), " ", " ", (showText && !textInside) ? _h('div', {
	    staticClass: "el-progress__text",
	    style: ({
	      fontSize: progressTextSize + 'px'
	    })
	  }, [(!status) ? [_s(percentage) + "%"] : _h('i', {
	    class: iconClass
	  }), " "]) : _e()])
	}},staticRenderFns: []}

/***/ }

/******/ });