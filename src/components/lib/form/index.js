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

	module.exports = __webpack_require__(98);


/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElForm = __webpack_require__(99);

	ElForm.install = function (Vue) {
	  Vue.component(ElForm.name, ElForm);
	};

	module.exports = ElForm;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(100)

	/* template */
	var __vue_template__ = __webpack_require__(101)
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

/***/ 100:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElForm',

	  componentName: 'form',

	  props: {
	    model: Object,
	    rules: Object,
	    type: String,
	    labelPosition: String,
	    labelWidth: String,
	    labelSuffix: {
	      type: String,
	      default: ''
	    },
	    inline: Boolean
	  },
	  data: function data() {
	    return {
	      fields: {},
	      fieldLength: 0
	    };
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('el.form.addField', function (field) {
	      _this.fields[field.prop] = field;
	      _this.fieldLength++;
	    });
	    this.$on('el.form.removeField', function (field) {
	      delete _this.fields[field.prop];
	      _this.fieldLength--;
	    });
	  },

	  methods: {
	    resetFields: function resetFields() {
	      for (var prop in this.fields) {
	        var field = this.fields[prop];
	        field.resetField();
	      }
	    },
	    validate: function validate(callback) {
	      var _this2 = this;

	      var count = 0;
	      var valid = true;

	      for (var prop in this.fields) {
	        var field = this.fields[prop];
	        field.validate('', function (errors) {
	          if (errors) {
	            valid = false;
	          }

	          if (++count === _this2.fieldLength) {
	            callback(valid);
	          }
	        });
	      }
	    },
	    validateField: function validateField(prop, cb) {
	      var field = this.fields[prop];
	      if (!field) {
	        throw new Error('must call validateField with valid prop string!');
	      }

	      field.validate('', cb);
	    }
	  }
	};

/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('form', {
	    staticClass: "el-form",
	    class: [
	      labelPosition ? 'el-form--label-' + labelPosition : '', {
	        'el-form--inline': inline
	      }
	    ]
	  }, [_t("default")])
	}},staticRenderFns: []}

/***/ }

/******/ });