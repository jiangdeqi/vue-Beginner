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

	module.exports = __webpack_require__(248);


/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Step = __webpack_require__(249);

	Step.install = function (Vue) {
	  Vue.component(Step.name, Step);
	};

	module.exports = Step;

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(250)

	/* template */
	var __vue_template__ = __webpack_require__(251)
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

/***/ 250:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'el-step',

	  props: {
	    title: String,
	    icon: String,
	    description: String,
	    status: {
	      type: String,
	      default: 'wait'
	    }
	  },

	  data: function data() {
	    return {
	      index: -1,
	      style: { width: 0, height: 0 },
	      lineStyle: { width: 0, height: 0 },
	      mainOffset: 0,
	      currentStatus: this.status
	    };
	  },
	  created: function created() {
	    this.$parent.steps.push(this);
	  },


	  methods: {
	    updateStatus: function updateStatus(val) {
	      var prevChild = this.$parent.$children[this.index - 1];

	      if (val > this.index) {
	        this.currentStatus = this.$parent.finishStatus;
	      } else if (val === this.index) {
	        this.currentStatus = this.$parent.processStatus;
	      } else {
	        this.currentStatus = 'wait';
	      }

	      if (prevChild) prevChild.calcProgress(this.currentStatus);
	    },
	    calcProgress: function calcProgress(status) {
	      var step = 100;

	      this.lineStyle.transitionDelay = 150 * this.index + 'ms';
	      if (status === this.$parent.processStatus) {
	        step = 50;
	      } else if (status === 'wait') {
	        step = 0;
	        this.lineStyle.transitionDelay = -150 * this.index + 'ms';
	      }

	      this.$parent.direction === 'vertical' ? this.lineStyle.height = step + '%' : this.lineStyle.width = step + '%';
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var parent = this.$parent;
	    var space = parent.space ? parent.space + 'px' : 100 / parent.steps.length + '%';

	    if (parent.direction === 'horizontal') {
	      this.style = { width: space };
	    } else {
	      if (parent.steps[parent.steps.length - 1] !== this) {
	        this.style = { height: space };
	      }
	    }

	    var unwatch = this.$watch('index', function (val) {
	      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
	      unwatch();
	    });
	  }
	};

/***/ },

/***/ 251:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-step",
	    class: ['is-' + $parent.direction],
	    style: (style)
	  }, [_h('div', {
	    staticClass: "el-step__head",
	    class: ['is-' + currentStatus, {
	      'is-text': !icon
	    }]
	  }, [_h('div', {
	    staticClass: "el-step__line",
	    class: ['is-' + $parent.direction, {
	      'is-icon': icon
	    }]
	  }, [_h('i', {
	    staticClass: "el-step__line-inner",
	    style: (lineStyle)
	  })]), " ", (currentStatus !== 'success' && currentStatus !== 'error') ? _t("icon", [(icon) ? _h('i', {
	    class: ['el-step__icon', 'el-icon-' + icon]
	  }) : _h('div', [_s(index + 1)]), " "]) : _h('i', {
	    staticClass: "el-step__icon",
	    class: ['el-icon-' + (currentStatus === 'success' ? 'check' : 'close')]
	  }), " "]), " ", _h('div', {
	    staticClass: "el-step__main",
	    style: ({
	      marginLeft: mainOffset
	    })
	  }, [_h('div', {
	    ref: "title",
	    staticClass: "el-step__title",
	    class: ['is-' + currentStatus]
	  }, [_t("title", [_s(title)])]), " ", _h('div', {
	    staticClass: "el-step__description",
	    class: ['is-' + currentStatus]
	  }, [_t("description", [_s(description)])])])])
	}},staticRenderFns: []}

/***/ }

/******/ });