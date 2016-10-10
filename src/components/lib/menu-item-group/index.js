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

	module.exports = __webpack_require__(156);


/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElMenuItemGroup = __webpack_require__(157);

	ElMenuItemGroup.install = function (Vue) {
	  Vue.component(ElMenuItemGroup.name, ElMenuItemGroup);
	};

	module.exports = ElMenuItemGroup;

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(158)

	/* template */
	var __vue_template__ = __webpack_require__(159)
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

/***/ 158:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'el-menu-item-group',

	  componentName: 'menu-item-group',

	  props: {
	    title: {
	      type: String,
	      required: true
	    }
	  },
	  data: function data() {
	    return {
	      paddingLeft: 20
	    };
	  },

	  methods: {
	    initPadding: function initPadding() {
	      var parent = this.$parent;
	      var level = 0;
	      var componentTag = parent.$options._componentTag;

	      while (componentTag !== 'el-menu') {
	        if (componentTag === 'el-submenu') {
	          level++;
	        }
	        parent = parent.$parent;
	        componentTag = parent.$options._componentTag;
	      }
	      this.paddingLeft += level * 10;
	    }
	  },
	  mounted: function mounted() {
	    this.initPadding();
	  }
	};

/***/ },

/***/ 159:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "el-menu-item-group"
	  }, [_h('div', {
	    staticClass: "el-menu-item-group__title",
	    style: ({
	      'padding-left': paddingLeft + 'px'
	    })
	  }, [_s(title)]), " ", _h('ul', [_t("default")])])
	}},staticRenderFns: []}

/***/ }

/******/ });