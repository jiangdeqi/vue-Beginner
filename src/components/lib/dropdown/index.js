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

	module.exports = __webpack_require__(85);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popper");

/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElDropdown = __webpack_require__(86);

	ElDropdown.install = function (Vue) {
	  Vue.component(ElDropdown.name, ElDropdown);
	};

	module.exports = ElDropdown;

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(87)

	/* template */
	var __vue_template__ = __webpack_require__(93)
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

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _index = __webpack_require__(88);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(89);

	var _index4 = _interopRequireDefault(_index3);

	var _dropdownMenu = __webpack_require__(90);

	var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

	var _clickoutside = __webpack_require__(9);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElDropdown',

	  components: {
	    ElButton: _index2.default,
	    ElButtonGroup: _index4.default,
	    ElDropdownMenu: _dropdownMenu2.default
	  },

	  directives: { Clickoutside: _clickoutside2.default },

	  props: {
	    text: String,
	    type: String,
	    iconSeparate: {
	      type: Boolean,
	      default: true
	    },
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    size: {
	      type: String,
	      default: ''
	    },
	    menuAlign: {
	      type: String,
	      default: 'end'
	    }
	  },

	  data: function data() {
	    return {
	      timeout: null,
	      visible: false
	    };
	  },


	  methods: {
	    show: function show() {
	      var _this = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this.visible = true;
	      }, 250);
	    },
	    hide: function hide() {
	      var _this2 = this;

	      clearTimeout(this.timeout);
	      this.timeout = setTimeout(function () {
	        _this2.visible = false;
	      }, 150);
	    },
	    handleMouseEnter: function handleMouseEnter() {
	      if (this.trigger === 'hover') {
	        this.show();
	      }
	    },
	    handleMouseLeave: function handleMouseLeave() {
	      if (this.trigger === 'hover') {
	        this.hide();
	      }
	    },
	    handleClick: function handleClick() {
	      if (this.trigger === 'click') {
	        this.visible = !this.visible;
	      }
	    }
	  }
	};

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/button");

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/button-group");

/***/ },

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(91)

	/* template */
	var __vue_template__ = __webpack_require__(92)
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

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popper = __webpack_require__(56);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      popper: null
	    };
	  },

	  computed: {
	    menuAlign: function menuAlign() {
	      return this.$parent.menuAlign;
	    }
	  },
	  methods: {
	    updatePopper: function updatePopper() {
	      if (this.popper) {
	        this.popper.update();
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    document.body.appendChild(this.$el);

	    this.$nextTick(function () {
	      _this.popper = new _popper2.default(_this.$parent.$el, _this.$el, { gpuAcceleration: false, placement: 'bottom-' + _this.menuAlign });
	    });
	  },
	  destroyed: function destroyed() {
	    var _this2 = this;

	    setTimeout(function () {
	      _this2.popper.destroy();
	    }, 300);
	  }
	};

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "el-dropdown__menu",
	    attrs: {
	      "transition": "md-fade-bottom"
	    }
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    directives: [{
	      name: "clickoutside",
	      value: (hide),
	      expression: "hide"
	    }],
	    staticClass: "el-dropdown",
	    class: {
	      'el-dropdown--text': type === 'text'
	    }
	  }, [(iconSeparate) ? _h('el-button-group', [_h('el-button', {
	    attrs: {
	      "size": size,
	      "type": type
	    },
	    nativeOn: {
	      "click": function($event) {
	        $emit('mainclick')
	      }
	    }
	  }, [_s(text)]), " ", _h('el-button', {
	    staticClass: "el-dropdown__icon-button",
	    attrs: {
	      "size": size,
	      "type": type
	    },
	    nativeOn: {
	      "mouseenter": function($event) {
	        handleMouseEnter($event)
	      },
	      "mouseleave": function($event) {
	        handleMouseLeave($event)
	      },
	      "click": function($event) {
	        handleClick($event)
	      }
	    }
	  }, [_m(0)])]) : _h('el-button', {
	    attrs: {
	      "size": size,
	      "type": type
	    },
	    nativeOn: {
	      "mouseenter": function($event) {
	        handleMouseEnter($event)
	      },
	      "mouseleave": function($event) {
	        handleMouseLeave($event)
	      },
	      "click": function($event) {
	        handleClick($event)
	      }
	    }
	  }, ["\n    " + _s(text), _h('i', {
	    staticClass: "el-dropdown__icon el-icon-caret-bottom"
	  })]), " ", " ", " ", " ", _h('transition', {
	    attrs: {
	      "name": "md-fade-bottom"
	    }
	  }, [(visible) ? _h('el-dropdown-menu', {
	    nativeOn: {
	      "mouseenter": function($event) {
	        handleMouseEnter($event)
	      },
	      "mouseleave": function($event) {
	        handleMouseLeave($event)
	      }
	    }
	  }, [_t("default")]) : _e()])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "el-dropdown__icon el-icon-caret-bottom"
	  })
	}}]}

/***/ }

/******/ });