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

	module.exports = __webpack_require__(151);


/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElMenuItem = __webpack_require__(152);

	ElMenuItem.install = function (Vue) {
	  Vue.component(ElMenuItem.name, ElMenuItem);
	};

	module.exports = ElMenuItem;

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(153)

	/* template */
	var __vue_template__ = __webpack_require__(155)
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

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _menuMixin = __webpack_require__(154);

	var _menuMixin2 = _interopRequireDefault(_menuMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'el-menu-item',

	  componentName: 'menu-item',

	  mixins: [_menuMixin2.default],

	  props: {
	    index: {
	      type: String,
	      required: true
	    },
	    disabled: {
	      type: Boolean,
	      required: false
	    }
	  },
	  computed: {
	    active: function active() {
	      return this.index === this.rootMenu.activeIndex;
	    }
	  },
	  methods: {
	    handleClick: function handleClick() {
	      this.rootMenu.handleSelect(this.index, this.indexPath);
	    }
	  },
	  created: function created() {
	    this.rootMenu.menuItems[this.index] = this;
	  }
	};

/***/ },

/***/ 154:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  computed: {
	    indexPath: function indexPath() {
	      var path = [this.index];
	      var parent = this.$parent;
	      while (parent.$options._componentTag !== 'el-menu') {
	        if (parent.index) {
	          path.unshift(parent.index);
	        }
	        parent = parent.$parent;
	      }
	      return path;
	    },
	    rootMenu: function rootMenu() {
	      var parent = this.$parent;
	      while (parent.$options._componentTag !== 'el-menu') {
	        parent = parent.$parent;
	      }
	      return parent;
	    }
	  }
	};

/***/ },

/***/ 155:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('li', {
	    staticClass: "el-menu-item",
	    class: {
	      'is-active': active,
	      'is-disabled': disabled
	    },
	    on: {
	      "click": handleClick
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });