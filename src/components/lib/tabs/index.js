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

	module.exports = __webpack_require__(281);


/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(266)

	/* template */
	var __vue_template__ = __webpack_require__(267)
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

/***/ 266:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'el-tab-pane',

	  props: {
	    label: {
	      type: String,
	      required: true
	    },
	    name: String
	  },

	  data: function data() {
	    return {
	      counter: 0,
	      transition: '',
	      paneStyle: {
	        position: 'relative'
	      },
	      key: ''
	    };
	  },
	  created: function created() {
	    if (!this.key) {
	      this.key = this.$parent.$children.indexOf(this) + 1 + '';
	    }
	  },


	  computed: {
	    show: function show() {
	      return this.$parent.currentName === this.key;
	    }
	  },

	  destroyed: function destroyed() {
	    this.$el.remove();
	  },


	  watch: {
	    name: {
	      immediate: true,
	      handler: function handler(val) {
	        this.key = val;
	      }
	    },
	    '$parent.currentName': function $parentCurrentName(newValue, oldValue) {
	      if (this.key === newValue) {
	        this.transition = newValue > oldValue ? 'slideInRight' : 'slideInLeft';
	      }
	      if (this.key === oldValue) {
	        this.transition = oldValue > newValue ? 'slideInRight' : 'slideInLeft';
	      }
	    }
	  }
	};

/***/ },

/***/ 267:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return (show && $slots.default) ? _h('div', {
	    staticClass: "el-tab-pane"
	  }, [_t("default")]) : _e()
	}},staticRenderFns: []}

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElTabs = __webpack_require__(282);
	var ElTabPane = __webpack_require__(265);

	ElTabs.install = function (Vue) {
	  Vue.component(ElTabs.name, ElTabs);
	  Vue.component(ElTabPane.name, ElTabPane);
	};

	module.exports = ElTabs;

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(283)

	/* template */
	var __vue_template__ = __webpack_require__(287)
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

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tab = __webpack_require__(284);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  name: 'el-tabs',

	  components: {
	    ElTab: _tab2.default
	  },

	  props: {
	    type: String,
	    tabPosition: String,
	    activeName: String,
	    closable: false,
	    tabWidth: 0
	  },

	  data: function data() {
	    return {
	      tabs: [],
	      children: null,
	      activeTab: null,
	      currentName: 0,
	      barStyle: ''
	    };
	  },


	  watch: {
	    activeName: {
	      handler: function handler(val) {
	        this.currentName = val;
	      }
	    },

	    'currentName': function currentName() {
	      this.calcBarStyle();
	    }
	  },

	  methods: {
	    handleTabRemove: function handleTabRemove(tab, ev) {
	      ev.stopPropagation();
	      tab.$destroy(true);

	      var index = this.tabs.indexOf(tab);

	      if (index !== -1) {
	        this.tabs.splice(index, 1);
	      }

	      if (tab.key === this.currentName) {
	        var nextChild = this.tabs[index];
	        var prevChild = this.tabs[index - 1];

	        this.currentName = nextChild ? nextChild.key : prevChild ? prevChild.key : '-1';
	      }
	      this.$emit('tab-remove', tab.key);
	    },
	    handleTabClick: function handleTabClick(tab, event) {
	      this.currentName = tab.key;
	      this.$emit('tab-click', tab.key, event);
	    },
	    calcBarStyle: function calcBarStyle(firstRendering) {
	      var _this = this;

	      if (this.type || !this.$refs.tabs) return {};
	      var style = {};
	      var offset = 0;
	      var tabWidth = 0;

	      this.tabs.every(function (tab, index) {
	        var $el = _this.$refs.tabs[index].$el;
	        if (tab.key !== _this.currentName) {
	          offset += $el.clientWidth;
	          return true;
	        } else {
	          tabWidth = $el.clientWidth;
	          return false;
	        }
	      });

	      style.width = tabWidth + 'px';
	      style.transform = 'translateX(' + offset + 'px)';

	      if (!firstRendering) {
	        style.transition = 'transform .3s cubic-bezier(.645,.045,.355,1), -webkit-transform .3s cubic-bezier(.645,.045,.355,1)';
	      }
	      this.barStyle = style;
	    }
	  },
	  mounted: function mounted() {
	    var _this2 = this;

	    var fisrtKey = this.$children[0].key || '1';
	    this.currentName = this.activeName || fisrtKey;
	    this.$children.forEach(function (tab) {
	      return _this2.tabs.push(tab);
	    });
	    this.$nextTick(function () {
	      return _this2.calcBarStyle(true);
	    });
	  }
	};

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(285)

	/* template */
	var __vue_template__ = __webpack_require__(286)
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

/***/ 285:
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'el-tab',

	  props: {
	    tab: {
	      type: Object,
	      required: true
	    },
	    closable: Boolean
	  }
	};

/***/ },

/***/ 286:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tabs__item",
	    class: {
	      'is-active': $parent.currentName === tab.key,
	        'is-disabled': tab.disabled,
	        'is-closable': closable
	    }
	  }, ["\n  " + _s(tab.label) + "\n  ", (closable) ? _h('span', {
	    staticClass: "el-icon-close",
	    on: {
	      "click": function($event) {
	        $emit('remove', tab, $event)
	      }
	    }
	  }) : _e()])
	}},staticRenderFns: []}

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tabs",
	    class: [type ? 'el-tabs--' + type : '']
	  }, [_h('div', {
	    staticClass: "el-tabs__header"
	  }, [(tabs) && _l((tabs), function(tab) {
	    return _h('el-tab', {
	      ref: "tabs",
	      refInFor: true,
	      attrs: {
	        "tab": tab,
	        "closable": closable
	      },
	      on: {
	        "remove": handleTabRemove
	      },
	      nativeOn: {
	        "click": function($event) {
	          handleTabClick(tab, $event)
	        }
	      }
	    })
	  }), " ", (!this.type && tabs.length > 0) ? _h('div', {
	    staticClass: "el-tabs__active-bar",
	    style: (barStyle)
	  }) : _e()]), " ", _h('div', {
	    staticClass: "el-tabs__content"
	  }, [_t("default")])])
	}},staticRenderFns: []}

/***/ }

/******/ });