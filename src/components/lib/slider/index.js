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

	module.exports = __webpack_require__(238);


/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/popper");

/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Slider = __webpack_require__(239);

	Slider.install = function (Vue) {
	  Vue.component(Slider.name, Slider);
	};

	module.exports = Slider;

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(240)

	/* template */
	var __vue_template__ = __webpack_require__(243)
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

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _popper = __webpack_require__(56);

	var _popper2 = _interopRequireDefault(_popper);

	var _index = __webpack_require__(241);

	var _index2 = _interopRequireDefault(_index);

	var _style = __webpack_require__(242);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElSlider',

	  props: {
	    min: {
	      type: Number,
	      default: 0
	    },
	    max: {
	      type: Number,
	      default: 100
	    },
	    step: {
	      type: Number,
	      default: 1
	    },
	    defaultValue: {
	      type: Number,
	      default: 0
	    },
	    value: {
	      type: Number,
	      default: 0
	    },
	    showInput: {
	      type: Boolean,
	      default: false
	    },
	    showStops: {
	      type: Boolean,
	      default: false
	    }
	  },

	  components: {
	    ElInputNumber: _index2.default
	  },

	  data: function data() {
	    return {
	      inputValue: null,
	      timeout: null,
	      showTip: false,
	      hovering: false,
	      dragging: false,
	      popper: null,
	      newPos: null,
	      oldValue: this.value,
	      currentPosition: (this.value - this.min) / (this.max - this.min) * 100 + '%'
	    };
	  },


	  watch: {
	    inputValue: function inputValue(val) {
	      this.$emit('input', Number(val));
	    },
	    showTip: function showTip(val) {
	      var _this = this;

	      if (val) {
	        this.$nextTick(function () {
	          _this.updatePopper();
	        });
	      } else {
	        this.timeout = setTimeout(function () {
	          if (_this.popper) {
	            _this.popper.destroy();
	            _this.popper = null;
	          }
	        }, 300);
	      }
	    },
	    value: function value(val) {
	      var _this2 = this;

	      this.$nextTick(function () {
	        _this2.updatePopper();
	      });
	      if (val < this.min) {
	        this.$emit('input', this.min);
	        return;
	      }
	      if (val > this.max) {
	        this.$emit('input', this.max);
	        return;
	      }
	      this.inputValue = val;
	      this.setPosition((val - this.min) * 100 / (this.max - this.min));
	    }
	  },

	  methods: {
	    handlePopperStyle: function handlePopperStyle() {
	      var placementMap = { top: 'bottom', bottom: 'top' };
	      var placement = this.popper._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      this.popper._popper.classList.add(placement);
	      this.popper._popper.classList.remove(placementMap[placement]);
	      this.popper._popper.style.transformOrigin = 'center ' + origin;
	    },
	    updatePopper: function updatePopper() {
	      var _this3 = this;

	      if (this.popper) {
	        clearTimeout(this.timeout);
	        this.popper.update();
	        this.handlePopperStyle();
	      } else {
	        this.popper = new _popper2.default(this.$refs.button, this.$refs.pop, { gpuAcceleration: false, placement: 'top' });
	        this.popper.onCreate(function () {
	          _this3.handlePopperStyle();
	        });
	        this.updatePopper();
	      }
	    },
	    setPosition: function setPosition(newPos) {
	      if (newPos >= 0 && newPos <= 100) {
	        var lengthPerStep = 100 / ((this.max - this.min) / this.step);
	        var steps = Math.round(newPos / lengthPerStep);
	        this.$emit('input', Math.round(steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min));
	        this.currentPosition = (this.value - this.min) / (this.max - this.min) * 100 + '%';
	        if (!this.dragging) {
	          if (this.value !== this.oldValue) {
	            this.$emit('change', this.value);
	            this.oldValue = this.value;
	          }
	        }
	      }
	    },
	    onSliderClick: function onSliderClick(event) {
	      var currentX = event.clientX;
	      var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
	      var newPos = (currentX - sliderOffsetLeft) / this.$sliderWidth * 100;
	      this.setPosition(newPos);
	    },
	    onInputChange: function onInputChange() {
	      if (this.value === '') {
	        return;
	      }
	      if (!isNaN(this.value)) {
	        this.setPosition((this.value - this.min) * 100 / (this.max - this.min));
	      }
	    }
	  },

	  computed: {
	    $sliderWidth: function $sliderWidth() {
	      return parseInt((0, _style.getStyle)(this.$refs.slider, 'width'), 10);
	    },
	    showTip: function showTip() {
	      return this.dragging || this.hovering;
	    },
	    stops: function stops() {
	      var stopCount = (this.max - this.value) / this.step;
	      var result = [];
	      var currentLeft = parseFloat(this.currentPosition);
	      var stepWidth = 100 * this.step / (this.max - this.min);
	      for (var i = 1; i < stopCount; i++) {
	        result.push(currentLeft + i * stepWidth);
	      }
	      return result;
	    }
	  },

	  mounted: function mounted() {
	    var _this4 = this;

	    var startX = 0;
	    var currentX = 0;
	    var startPos = 0;

	    var onDragStart = function onDragStart(event) {
	      _this4.dragging = true;
	      startX = event.clientX;
	      startPos = parseInt(_this4.currentPosition, 10);
	    };

	    var onDragging = function onDragging(event) {
	      if (_this4.dragging) {
	        currentX = event.clientX;
	        var diff = (currentX - startX) / _this4.$sliderWidth * 100;
	        _this4.newPos = startPos + diff;
	        _this4.setPosition(_this4.newPos);
	      }
	    };

	    var onDragEnd = function onDragEnd() {
	      if (_this4.dragging) {
	        _this4.dragging = false;
	        _this4.setPosition(_this4.newPos);
	        window.removeEventListener('mousemove', onDragging);
	        window.removeEventListener('mouseup', onDragEnd);
	      }
	    };

	    this.$refs.button.addEventListener('mousedown', function (event) {
	      onDragStart(event);
	      window.addEventListener('mousemove', onDragging);
	      window.addEventListener('mouseup', onDragEnd);
	    });
	  },
	  created: function created() {
	    if (typeof this.value !== 'number' || this.value < this.min || this.value > this.max) {
	      this.$emit('input', this.min);
	    }
	    this.inputValue = this.inputValue || this.value;
	  },
	  beforeDestroy: function beforeDestroy() {
	    if (this.popper) {
	      this.popper.destroy();
	    }
	  }
	};

/***/ },

/***/ 241:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input-number");

/***/ },

/***/ 242:
/***/ function(module, exports) {

	var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
	var MOZ_HACK_REGEXP = /^moz([A-Z])/;

	function camelCase(name) {
	  return name.
	    replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
	      return offset ? letter.toUpperCase() : letter;
	    }).
	    replace(MOZ_HACK_REGEXP, 'Moz$1');
	}

	var ieVersion = Number(document.documentMode);
	var getStyle = ieVersion < 9 ? function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'styleFloat';
	  }
	  try {
	    switch (styleName) {
	      case 'opacity':
	        try {
	          return element.filters.item('alpha').opacity / 100;
	        }
	        catch (e) {
	          return 1.0;
	        }
	        break;
	      default:
	        return ( element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null );
	    }
	  } catch(e) {
	    return element.style[styleName];
	  }
	} : function(element, styleName) {
	  if (!element || !styleName) return null;
	  styleName = camelCase(styleName);
	  if (styleName === 'float') {
	    styleName = 'cssFloat';
	  }
	  try {
	    var computed = document.defaultView.getComputedStyle(element, '');
	    return element.style[styleName] || computed ? computed[styleName] : null;
	  } catch(e) {
	    return element.style[styleName];
	  }
	};

	var setStyle = function(element, styleName, value) {
	  if (!element || !styleName) return;

	  if (typeof styleName === 'object') {
	    for (var prop in styleName) {
	      if (styleName.hasOwnProperty(prop)) {
	        setStyle(element, prop, styleName[prop]);
	      }
	    }
	  } else {
	    styleName = camelCase(styleName);
	    if (styleName === 'opacity' && ieVersion < 9) {
	      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
	    } else {
	      element.style[styleName] = value;
	    }
	  }
	};

	module.exports = {
	  getStyle: getStyle,
	  setStyle: setStyle
	};

/***/ },

/***/ 243:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-slider"
	  }, [(showInput) ? _h('el-input-number', {
	    directives: [{
	      name: "model",
	      value: (inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    staticClass: "el-slider__input",
	    attrs: {
	      "step": step,
	      "min": min,
	      "max": max,
	      "size": "small"
	    },
	    domProps: {
	      "value": (inputValue)
	    },
	    on: {
	      "input": function($event) {
	        inputValue = $event
	      }
	    },
	    nativeOn: {
	      "keyup": function($event) {
	        onInputChange()
	      }
	    }
	  }) : _e(), " ", _h('div', {
	    ref: "slider",
	    staticClass: "el-slider__runway",
	    class: {
	      'show-input': showInput
	    },
	    on: {
	      "click": onSliderClick
	    }
	  }, [_h('div', {
	    staticClass: "el-slider__bar",
	    style: ({
	      width: currentPosition
	    })
	  }), " ", _h('div', {
	    ref: "button",
	    staticClass: "el-slider__button-wrapper",
	    style: ({
	      left: currentPosition
	    }),
	    on: {
	      "mouseenter": function($event) {
	        hovering = true
	      },
	      "mouseleave": function($event) {
	        hovering = false
	      }
	    }
	  }, [_h('div', {
	    staticClass: "el-slider__button",
	    class: {
	      'hover': hovering, 'dragging': dragging
	    }
	  })]), " ", _h('transition', {
	    attrs: {
	      "name": "popper-fade"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (showTip),
	      expression: "showTip"
	    }],
	    ref: "pop",
	    staticClass: "el-slider__pop"
	  }, [_s(value)])]), " ", (stops) && _l((stops), function(item) {
	    return (showStops) ? _h('div', {
	      staticClass: "el-slider__stop",
	      style: ({
	        'left': item + '%'
	      })
	    }) : _e()
	  })])])
	}},staticRenderFns: []}

/***/ }

/******/ });