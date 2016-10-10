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

	module.exports = __webpack_require__(176);


/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _main = __webpack_require__(177);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _main2.default;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(52);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotificationConstructor = _vue2.default.extend(__webpack_require__(178));

	var instance = void 0;
	var instances = [];
	var seed = 1;

	var Notification = function Notification(options) {
	  options = options || {};
	  var userOnClose = options.onClose;
	  var id = 'notification_' + seed++;

	  options.onClose = function () {
	    Notification.close(id, userOnClose);
	  };

	  instance = new NotificationConstructor({
	    data: options
	  });
	  instance.id = id;
	  instance.vm = instance.$mount();
	  document.body.appendChild(instance.vm.$el);
	  instance.vm.visible = true;
	  instance.dom = instance.vm.$el;

	  var topDist = 0;
	  for (var i = 0, len = instances.length; i < len; i++) {
	    topDist += instances[i].$el.offsetHeight + 16;
	  }
	  topDist += 16;
	  instance.top = topDist;
	  instances.push(instance);
	};

	Notification.close = function (id, userOnClose) {
	  var index = void 0;
	  var removedHeight = void 0;
	  for (var i = 0, len = instances.length; i < len; i++) {
	    if (id === instances[i].id) {
	      if (typeof userOnClose === 'function') {
	        userOnClose(instances[i]);
	      }
	      index = i;
	      removedHeight = instances[i].dom.offsetHeight;
	      instances.splice(i, 1);
	      break;
	    }
	  }

	  if (len > 1) {
	    for (i = index; i < len - 1; i++) {
	      instances[i].dom.style.top = parseInt(instances[i].dom.style.top, 10) - removedHeight - 16 + 'px';
	    }
	  }
	};

	exports.default = Notification;

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(179)

	/* template */
	var __vue_template__ = __webpack_require__(180)
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

/***/ 179:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;


	var typeMap = {
	  success: 'circle-check',
	  info: 'information',
	  warning: 'warning',
	  error: 'circle-cross'
	};

	exports.default = {
	  data: function data() {
	    return {
	      visible: false,
	      title: '',
	      message: '',
	      duration: 4500,
	      type: '',
	      onClose: null,
	      closed: false,
	      top: null,
	      timer: null
	    };
	  },


	  computed: {
	    typeClass: function typeClass() {
	      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
	    }
	  },

	  watch: {
	    closed: function closed(newVal) {
	      var _this = this;

	      if (newVal) {
	        this.visible = false;
	        this.$el.addEventListener('transitionend', function () {
	          _this.$destroy(true);
	          _this.$el.parentNode.removeChild(_this.$el);
	        });
	      }
	    }
	  },

	  methods: {
	    handleClose: function handleClose() {
	      this.closed = true;
	      if (typeof this.onClose === 'function') {
	        this.onClose();
	      }
	    },
	    clearTimer: function clearTimer() {
	      clearTimeout(this.timer);
	    },
	    startTimer: function startTimer() {
	      var _this2 = this;

	      if (this.duration > 0) {
	        this.timer = setTimeout(function () {
	          if (!_this2.closed) {
	            _this2.handleClose();
	          }
	        }, this.duration);
	      }
	    }
	  },

	  mounted: function mounted() {
	    var _this3 = this;

	    if (this.duration > 0) {
	      this.timer = setTimeout(function () {
	        if (!_this3.closed) {
	          _this3.handleClose();
	        }
	      }, this.duration);
	    }
	  }
	};

/***/ },

/***/ 180:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('transition', {
	    attrs: {
	      "name": "el-notification-fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (visible),
	      expression: "visible"
	    }],
	    staticClass: "el-notification",
	    style: ({
	      top: top ? top + 'px' : 'auto'
	    }),
	    on: {
	      "mouseenter": function($event) {
	        clearTimer()
	      },
	      "mouseleave": function($event) {
	        startTimer()
	      }
	    }
	  }, [(type) ? _h('i', {
	    staticClass: "el-notification__icon",
	    class: [typeClass]
	  }) : _e(), " ", _h('div', {
	    staticClass: "el-notification__group",
	    style: ({
	      'margin-left': typeClass ? '55px' : '0'
	    })
	  }, [_h('span', [_s(title)]), " ", _h('p', [_s(message)]), " ", _h('div', {
	    staticClass: "el-notification__closeBtn el-icon-close",
	    on: {
	      "click": function($event) {
	        handleClose()
	      }
	    }
	  })])])])
	}},staticRenderFns: []}

/***/ }

/******/ });