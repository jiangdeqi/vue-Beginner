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

	module.exports = __webpack_require__(279);


/***/ },

/***/ 230:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/tag");

/***/ },

/***/ 274:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },

/***/ 277:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/checkbox");

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ElTableColumn = __webpack_require__(280);

	ElTableColumn.install = function (Vue) {
	  Vue.component(ElTableColumn.name, ElTableColumn);
	};

	module.exports = ElTableColumn;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _index = __webpack_require__(277);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(230);

	var _index4 = _interopRequireDefault(_index3);

	var _objectAssign = __webpack_require__(274);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var columnIdSeed = 1;

	var defaults = {
	  default: {
	    direction: ''
	  },
	  selection: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    direction: ''
	  },
	  index: {
	    width: 48,
	    minWidth: 48,
	    realWidth: 48,
	    direction: ''
	  },
	  filter: {
	    headerTemplate: function headerTemplate(h) {
	      return h(
	        'span',
	        null,
	        ['filter header']
	      );
	    },
	    direction: ''
	  }
	};

	var forced = {
	  selection: {
	    headerTemplate: function headerTemplate(h) {
	      var _this = this;

	      return h(
	        'div',
	        null,
	        [h(
	          'el-checkbox',
	          {
	            nativeOn: {
	              click: this.toggleAllSelection
	            },
	            domProps: {
	              value: this.allSelected
	            },
	            on: {
	              input: function input($event) {
	                return _this.$emit('allselectedchange', $event);
	              }
	            }
	          },
	          []
	        )]
	      );
	    },
	    template: function template(h, _ref) {
	      var row = _ref.row;
	      return h(
	        'el-checkbox',
	        {
	          domProps: {
	            value: row.$selected
	          },
	          on: {
	            input: function input($event) {
	              row.$selected = $event;
	            }
	          }
	        },
	        []
	      );
	    },
	    sortable: false,
	    resizable: false
	  },
	  index: {
	    headerTemplate: function headerTemplate(h, label) {
	      return h(
	        'div',
	        null,
	        [label || '#']
	      );
	    },
	    template: function template(h, _ref2) {
	      var row = _ref2.row;
	      var $index = _ref2.$index;
	      return h(
	        'div',
	        null,
	        [$index + 1]
	      );
	    },
	    sortable: false
	  },
	  filter: {
	    headerTemplate: function headerTemplate(h) {
	      return h(
	        'div',
	        null,
	        ['#']
	      );
	    },
	    template: function template(h, _ref3) {
	      var row = _ref3.row;
	      var column = _ref3.column;
	      return h(
	        'el-tag',
	        {
	          attrs: { type: 'primary' },
	          style: 'height: 16px; line-height: 16px; min-width: 40px; text-align: center' },
	        [row[column.property]]
	      );
	    },
	    resizable: false
	  }
	};

	var getDefaultColumn = function getDefaultColumn(type, options) {
	  var column = {};

	  (0, _objectAssign2.default)(column, defaults[type || 'default']);

	  for (var name in options) {
	    if (options.hasOwnProperty(name)) {
	      var value = options[name];
	      if (typeof value !== 'undefined') {
	        column[name] = value;
	      }
	    }
	  }

	  return column;
	};

	exports.default = {
	  name: 'el-table-column',

	  props: {
	    type: {
	      type: String,
	      default: 'default'
	    },
	    label: String,
	    property: String,
	    width: {},
	    minWidth: {},
	    template: String,
	    sortable: {
	      type: Boolean,
	      default: false
	    },
	    resizable: {
	      type: Boolean,
	      default: true
	    },
	    align: String,
	    showTooltipWhenOverflow: {
	      type: Boolean,
	      default: false
	    },
	    formatter: Function
	  },

	  render: function render() {},
	  data: function data() {
	    return {
	      isChildColumn: false,
	      columns: []
	    };
	  },
	  beforeCreate: function beforeCreate() {
	    this.row = {};
	    this.column = {};
	    this.$index = 0;
	  },


	  components: {
	    ElCheckbox: _index2.default,
	    ElTag: _index4.default
	  },

	  created: function created() {
	    this.customRender = this.$options.render;
	    this.$options.render = function (h) {
	      return h('div');
	    };

	    var columnId = this.columnId = (this.$parent.gridId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

	    var parent = this.$parent;
	    if (!parent.gridId) {
	      this.isChildColumn = true;
	    }

	    var type = this.type;

	    var width = this.width;
	    if (width !== undefined) {
	      width = parseInt(width, 10);
	      if (isNaN(width)) {
	        width = null;
	      }
	    }

	    var minWidth = this.minWidth;
	    if (minWidth !== undefined) {
	      minWidth = parseInt(minWidth, 10);
	      if (isNaN(minWidth)) {
	        minWidth = 80;
	      }
	    } else {
	      minWidth = 80;
	    }

	    var isColumnGroup = false;
	    var template = void 0;

	    var property = this.property;
	    if (property) {
	      template = function template(h, _ref4, parent) {
	        var row = _ref4.row;

	        return h(
	          'span',
	          null,
	          [parent.$getPropertyText(row, property, columnId)]
	        );
	      };
	    }

	    var column = getDefaultColumn(type, {
	      id: columnId,
	      label: this.label,
	      property: this.property,
	      type: type,
	      template: template,
	      minWidth: minWidth,
	      width: width,
	      isColumnGroup: isColumnGroup,
	      align: this.align ? 'is-' + this.align : null,
	      realWidth: width || minWidth,
	      sortable: this.sortable,
	      resizable: this.resizable,
	      showTooltipWhenOverflow: this.showTooltipWhenOverflow,
	      formatter: this.formatter
	    });

	    (0, _objectAssign2.default)(column, forced[type] || {});

	    var renderColumn = column.template;
	    var _self = this;

	    column.template = function (h, data) {
	      if (_self.$vnode.data.inlineTemplate) {
	        renderColumn = function renderColumn() {
	          data._staticTrees = _self._staticTrees;
	          data.$options = {};
	          data.$options.staticRenderFns = _self.$options.staticRenderFns;
	          data._renderProxy = _self._renderProxy;
	          data._m = _self._m;

	          return _self.customRender.call(data);
	        };
	      };

	      return _self.showTooltipWhenOverflow ? h(
	        'el-tooltip',
	        {
	          on: {
	            created: this.handleCreate
	          },
	          attrs: {
	            effect: this.effect,
	            placement: 'top',
	            disabled: this.tooltipDisabled }
	        },
	        [h(
	          'div',
	          { 'class': 'cell' },
	          [renderColumn(h, data, this._renderProxy)]
	        ), h(
	          'span',
	          { slot: 'content' },
	          [renderColumn(h, data, this._renderProxy)]
	        )]
	      ) : h(
	        'div',
	        { 'class': 'cell' },
	        [renderColumn(h, data, this._renderProxy)]
	      );
	    };

	    this.columnConfig = column;
	  },
	  destroyed: function destroyed() {
	    if (!this.$parent) {
	      return;
	    }
	    var columns = this.$parent.columns;
	    if (columns) {
	      var columnId = this.columnId;
	      for (var i = 0, j = columns.length; i < j; i++) {
	        var column = columns[i];

	        if (column.id === columnId) {
	          columns.splice(i, 1);
	          break;
	        }
	      }
	    }

	    if (this.isChildColumn) {
	      if (this.$parent.$parent.$ready) {
	        this.$parent.$parent.debouncedReRender();
	      }
	    } else {
	      if (this.$parent.$ready) {
	        this.$parent.debouncedReRender();
	      }
	    }
	  },


	  watch: {
	    label: function label(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.label = newVal;
	      }
	    },
	    property: function property(newVal) {
	      if (this.columnConfig) {
	        this.columnConfig.property = newVal;
	      }
	    }
	  },

	  mounted: function mounted() {
	    var parent = this.$parent;
	    var columnConfig = this.columnConfig;
	    var columnIndex = void 0;

	    if (!this.isChildColumn) {
	      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
	    } else {
	      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
	    }

	    parent.columns.splice(columnIndex, 0, columnConfig);

	    if (this.isChildColumn) {
	      parent.columnConfig.columns = parent.columns;

	      if (parent.$parent.$ready) {
	        parent.$parent.debouncedReRender();
	      }
	    } else {
	      if (parent.$ready) {
	        parent.debouncedReRender();
	      }
	    }
	  }
	};

/***/ }

/******/ });