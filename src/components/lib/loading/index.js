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

	module.exports = __webpack_require__(144);


/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _directive = __webpack_require__(145);

	var _directive2 = _interopRequireDefault(_directive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_directive2.default.name = 'loading';

	module.exports = _directive2.default;

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _spinner = __webpack_require__(146);

	var _spinner2 = _interopRequireDefault(_spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.install = function (Vue) {
	  var toggleLoading = function toggleLoading(el, binding) {
	    if (binding.value) {
	      Vue.nextTick(function () {
	        if (binding.modifiers.fullscreen) {
	          el.originalPosition = document.body.style.position;
	          el.originalOverflow = document.body.style.overflow;

	          ['top', 'right', 'bottom', 'left'].forEach(function (property) {
	            el.maskStyle[property] = '0';
	          });
	          el.maskStyle.position = 'fixed';
	          el.spinnerStyle.position = 'fixed';

	          insertDom(document.body, el, binding);
	        } else {
	          if (binding.modifiers.body) {
	            el.originalPosition = document.body.style.position;

	            ['top', 'left'].forEach(function (property) {
	              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
	              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
	            });
	            ['height', 'width'].forEach(function (property) {
	              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
	            });

	            insertDom(document.body, el, binding);
	          } else {
	            el.originalPosition = el.style.position;

	            ['top', 'right', 'bottom', 'left'].forEach(function (property) {
	              el.maskStyle[property] = '0';
	            });

	            insertDom(el, el, binding);
	          }
	        }
	      });
	    } else {
	      if (el.domVisible) {
	        el.mask.style.display = 'none';
	        el.spinner.style.display = 'none';
	        el.domVisible = false;

	        if (binding.modifiers.fullscreen) {
	          document.body.style.overflow = el.originalOverflow;
	        }
	        if (binding.modifiers.fullscreen || binding.modifiers.body) {
	          document.body.style.position = el.originalPosition;
	        } else {
	          el.style.position = el.originalPosition;
	        }
	      }
	    }
	  };
	  var insertDom = function insertDom(parent, directive, binding) {
	    if (!directive.domVisible) {
	      Object.keys(directive.maskStyle).forEach(function (property) {
	        directive.mask.style[property] = directive.maskStyle[property];
	      });

	      Object.keys(directive.spinnerStyle).forEach(function (property) {
	        directive.spinner.style[property] = directive.spinnerStyle[property];
	      });

	      if (directive.originalPosition !== 'absolute') {
	        parent.style.position = 'relative';
	      }
	      if (binding.modifiers.fullscreen) {
	        parent.style.overflow = 'hidden';
	      }
	      directive.mask.style.display = 'block';
	      directive.spinner.style.display = 'inline-block';
	      directive.domVisible = true;

	      parent.appendChild(directive.mask);
	      directive.mask.appendChild(directive.spinner);
	      directive.domInserted = true;
	    }
	  };

	  Vue.directive('loading', {
	    bind: function bind(el, binding) {
	      el.mask = document.createElement('div');
	      el.mask.className = 'el-loading-mask';
	      el.maskStyle = {
	        position: 'absolute',
	        zIndex: '10000',
	        backgroundColor: 'rgba(0, 0, 0, .65)',
	        margin: '0'
	      };

	      el.spinner = new _spinner2.default().el;
	      el.spinnerStyle = {
	        position: 'absolute'
	      };
	      toggleLoading(el, binding);
	    },

	    update: function update(el, binding) {
	      toggleLoading(el, binding);
	    },

	    unbind: function unbind(el, binding) {
	      if (el.domInserted) {
	        if (binding.modifiers.fullscreen || binding.modifiers.body) {
	          document.body.removeChild(el.mask);
	          el.mask.removeChild(el.spinner);
	        } else {
	          el.removeChild(el.mask);
	          el.mask.removeChild(el.spinner);
	        }
	      }
	    }
	  });
	};

/***/ },

/***/ 146:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Spinner = function Spinner() {
	  _classCallCheck(this, Spinner);

	  var spinner = document.createElement('div');
	  spinner.classList.add('el-loading-spinner');
	  [1, 2, 3].forEach(function (index) {
	    var bubble = document.createElement('div');
	    bubble.classList.add('el-loading-bubble', 'bubble' + index);
	    spinner.appendChild(bubble);
	  });
	  this.el = spinner;
	};

	exports.default = Spinner;

/***/ }

/******/ });