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

	module.exports = __webpack_require__(189);


/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Pagination = __webpack_require__(190);

	Pagination.install = function (Vue) {
	  Vue.component(Pagination.name, Pagination);
	};

	module.exports = Pagination;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(52);

	var _vue2 = _interopRequireDefault(_vue);

	var _pager = __webpack_require__(191);

	var _pager2 = _interopRequireDefault(_pager);

	var _index = __webpack_require__(194);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(195);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElPagination',

	  props: {
	    pageSize: {
	      type: Number,
	      default: 10
	    },

	    small: Boolean,

	    total: {
	      type: Number,
	      default: 0
	    },

	    currentPage: {
	      type: Number,
	      default: 1
	    },

	    layout: {
	      default: 'prev, pager, next, jumper, ->, total'
	    },

	    pageSizes: {
	      type: Array,
	      default: function _default() {
	        return [10, 20, 30, 40, 50, 100];
	      }
	    }
	  },

	  data: function data() {
	    return {
	      internalCurrentPage: 1,
	      internalPageSize: 0
	    };
	  },
	  render: function render(h) {
	    var template = h(
	      'div',
	      { 'class': 'el-pagination' },
	      []
	    );
	    var layout = this.$options.layout || this.layout || '';
	    var TEMPLATE_MAP = {
	      prev: h(
	        'prev',
	        null,
	        []
	      ),
	      jumper: h(
	        'jumper',
	        null,
	        []
	      ),
	      pager: h(
	        'pager',
	        {
	          attrs: { currentPage: this.internalCurrentPage, pageCount: this.pageCount },
	          on: {
	            currentchange: this.handleCurrentChange
	          }
	        },
	        []
	      ),
	      next: h(
	        'next',
	        null,
	        []
	      ),
	      sizes: h(
	        'sizes',
	        null,
	        []
	      ),
	      slot: h(
	        'slot',
	        null,
	        []
	      ),
	      total: h(
	        'total',
	        null,
	        []
	      )
	    };
	    var components = layout.split(',').map(function (item) {
	      return item.trim();
	    });
	    var rightWrapper = h(
	      'div',
	      { 'class': 'el-pagination__rightwrapper' },
	      []
	    );
	    var haveRightWrapper = false;

	    if (this.small) {
	      template.data.class += ' el-pagination--small';
	    }

	    components.forEach(function (compo) {
	      if (compo === '->') {
	        haveRightWrapper = true;
	        return;
	      }

	      if (!haveRightWrapper) {
	        template.children.push(TEMPLATE_MAP[compo]);
	      } else {
	        rightWrapper.children.push(TEMPLATE_MAP[compo]);
	      }
	    });

	    if (haveRightWrapper) {
	      template.children.push(rightWrapper);
	    }

	    return template;
	  },


	  components: {
	    Prev: {
	      render: function render(h) {
	        return h(
	          'button',
	          {
	            'class': ['btn-prev', { disabled: this.$parent.internalCurrentPage <= 1 }],
	            on: {
	              click: this.$parent.prev
	            }
	          },
	          [h(
	            'i',
	            { 'class': 'el-icon el-icon-arrow-left' },
	            []
	          )]
	        );
	      }
	    },

	    Next: {
	      render: function render(h) {
	        return h(
	          'button',
	          {
	            'class': ['btn-next', { disabled: this.$parent.internalCurrentPage === this.$parent.pageCount }],
	            on: {
	              click: this.$parent.next
	            }
	          },
	          [h(
	            'i',
	            { 'class': 'el-icon el-icon-arrow-right' },
	            []
	          )]
	        );
	      }
	    },

	    Sizes: {
	      created: function created() {
	        if (Array.isArray(this.$parent.pageSizes)) {
	          this.$parent.internalPageSize = this.$parent.pageSizes.indexOf(this.$parent.pageSize) > -1 ? this.$parent.pageSize : this.$parent.pageSizes[0];
	        }
	      },
	      render: function render(h) {
	        return h(
	          'span',
	          { 'class': 'el-pagination__sizes' },
	          [h(
	            'el-select',
	            {
	              attrs: {
	                size: 'small',
	                value: this.$parent.internalPageSize,

	                width: 110 },
	              on: {
	                change: this.handleChange
	              }
	            },
	            [this.$parent.pageSizes.map(function (item) {
	              return h(
	                'el-option',
	                {
	                  attrs: {
	                    value: item,
	                    label: item + ' 条/页' }
	                },
	                []
	              );
	            })]
	          )]
	        );
	      },


	      components: {
	        ElSelect: _index2.default,
	        ElOption: _index4.default
	      },

	      methods: {
	        handleChange: function handleChange(val) {
	          if (val !== this.$parent.internalPageSize) {
	            this.$parent.internalPageSize = val = parseInt(val, 10);
	            this.$parent.$emit('sizechange', val);
	          }
	        }
	      }
	    },

	    Jumper: {
	      data: function data() {
	        return {
	          oldValue: null
	        };
	      },


	      methods: {
	        handleFocus: function handleFocus(event) {
	          this.oldValue = event.target.value;
	        },
	        handleChange: function handleChange(event) {
	          var target = event.target;
	          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(target.value);

	          if (target.value !== this.oldValue && Number(target.value) === this.$parent.internalCurrentPage) {
	            this.$parent.$emit('currentchange', this.$parent.internalCurrentPage);
	          }

	          this.oldValue = null;
	        }
	      },

	      render: function render(h) {
	        return h(
	          'span',
	          { 'class': 'el-pagination__jump' },
	          ['前往', h(
	            'input',
	            {
	              'class': 'el-pagination__editor',
	              attrs: { type: 'number',
	                min: 1,
	                max: this.pageCount,
	                value: this.$parent.internalCurrentPage,

	                number: true,
	                lazy: true },
	              on: {
	                change: this.handleChange,
	                focus: this.handleFocus
	              },

	              style: { width: '30px' } },
	            []
	          ), '页']
	        );
	      }
	    },

	    Total: {
	      render: function render(h) {
	        return h(
	          'span',
	          { 'class': 'el-pagination__total' },
	          ['共 ', this.$parent.total, ' 条']
	        );
	      }
	    },

	    Pager: _pager2.default
	  },

	  methods: {
	    handleCurrentChange: function handleCurrentChange(val) {
	      this.internalCurrentPage = this.getValidCurrentPage(val);
	      this.$emit('currentchange', this.internalCurrentPage);
	    },
	    prev: function prev() {
	      var oldPage = this.internalCurrentPage;
	      var newVal = this.internalCurrentPage - 1;
	      this.internalCurrentPage = this.getValidCurrentPage(newVal);

	      if (this.internalCurrentPage !== oldPage) {
	        this.$emit('currentchange', this.internalCurrentPage);
	      }
	    },
	    next: function next() {
	      var oldPage = this.internalCurrentPage;
	      var newVal = this.internalCurrentPage + 1;
	      this.internalCurrentPage = this.getValidCurrentPage(newVal);

	      if (this.internalCurrentPage !== oldPage) {
	        this.$emit('currentchange', this.internalCurrentPage);
	      }
	    },
	    first: function first() {
	      var oldPage = this.internalCurrentPage;
	      var newVal = 1;
	      this.internalCurrentPage = this.getValidCurrentPage(newVal);

	      if (this.internalCurrentPage !== oldPage) {
	        this.$emit('currentchange', this.internalCurrentPage);
	      }
	    },
	    last: function last() {
	      var oldPage = this.internalCurrentPage;
	      var newVal = this.pageCount;
	      this.internalCurrentPage = this.getValidCurrentPage(newVal);

	      if (this.internalCurrentPage !== oldPage) {
	        this.$emit('currentchange', this.internalCurrentPage);
	      }
	    },
	    getValidCurrentPage: function getValidCurrentPage(value) {
	      value = parseInt(value, 10);

	      var resetValue;
	      if (value < 1) {
	        resetValue = this.pageCount > 0 ? 1 : 0;
	      } else if (value > this.pageCount) {
	        resetValue = this.pageCount;
	      }

	      if (resetValue === undefined && isNaN(value)) {
	        value = this.pageCount > 0 ? 1 : 0;
	      }

	      return resetValue === undefined ? value : resetValue;
	    }
	  },

	  computed: {
	    pageCount: function pageCount() {
	      return Math.ceil(this.total / this.internalPageSize);
	    },
	    startRecordIndex: function startRecordIndex() {
	      var result = (this.internalCurrentPage - 1) * this.internalPageSize + 1;
	      return result > 0 ? result : 0;
	    },
	    endRecordIndex: function endRecordIndex() {
	      var result = this.internalCurrentPage * this.internalPageSize;
	      return result > this.total ? this.total : result;
	    }
	  },

	  watch: {
	    pageCount: function pageCount(newVal) {
	      if (newVal > 0 && this.internalCurrentPage === 0) {
	        this.internalCurrentPage = 1;
	      } else if (this.internalCurrentPage > newVal) {
	        this.internalCurrentPage = newVal;
	      }
	    },


	    currentPage: {
	      immediate: true,
	      handler: function handler(val) {
	        this.internalCurrentPage = val;
	      }
	    },

	    pageSize: {
	      immediate: true,
	      handler: function handler(val) {
	        this.internalPageSize = val;
	      }
	    },

	    internalCurrentPage: function internalCurrentPage(newVal, oldVal) {
	      var _this = this;

	      newVal = parseInt(newVal, 10);

	      if (isNaN(newVal)) {
	        newVal = oldVal || 1;
	      } else {
	        newVal = this.getValidCurrentPage(newVal);
	      }

	      if (newVal !== undefined) {
	        _vue2.default.nextTick(function () {
	          _this.internalCurrentPage = newVal;
	        });
	      }
	    }
	  }
	};

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(192)

	/* template */
	var __vue_template__ = __webpack_require__(193)
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

/***/ 192:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = {
	  name: 'ElPager',

	  props: {
	    currentPage: Number,

	    pageCount: Number
	  },

	  watch: {
	    showPrevMore: function showPrevMore(val) {
	      if (!val) this.quickprevIconClass = 'el-icon-more';
	    },
	    showNextMore: function showNextMore(val) {
	      if (!val) this.quicknextIconClass = 'el-icon-more';
	    }
	  },

	  methods: {
	    onPagerClick: function onPagerClick(event) {
	      var target = event.target;
	      if (target.tagName === 'UL') {
	        return;
	      }

	      var newPage = Number(event.target.textContent);
	      var pageCount = this.pageCount;
	      var currentPage = this.currentPage;

	      if (target.className.indexOf('more') !== -1) {
	        if (target.className.indexOf('quickprev') !== -1) {
	          newPage = currentPage - 5;
	        } else if (target.className.indexOf('quicknext') !== -1) {
	          newPage = currentPage + 5;
	        }
	      }

	      if (!isNaN(newPage)) {
	        if (newPage < 1) {
	          newPage = 1;
	        }

	        if (newPage > pageCount) {
	          newPage = pageCount;
	        }
	      }

	      if (newPage !== currentPage) {
	        this.$emit('currentchange', newPage);
	      }
	    }
	  },

	  computed: {
	    pagers: function pagers() {
	      var pagerCount = 7;

	      var currentPage = Number(this.currentPage);
	      var pageCount = Number(this.pageCount);

	      var showPrevMore = false;
	      var showNextMore = false;

	      if (pageCount > pagerCount) {
	        if (currentPage > pagerCount - 2) {
	          showPrevMore = true;
	        }

	        if (currentPage < pageCount - 2) {
	          showNextMore = true;
	        }
	      }

	      var array = [];

	      if (showPrevMore && !showNextMore) {
	        var startPage = pageCount - (pagerCount - 2);
	        for (var i = startPage; i < pageCount; i++) {
	          array.push(i);
	        }
	      } else if (!showPrevMore && showNextMore) {
	        for (var _i = 2; _i < pagerCount; _i++) {
	          array.push(_i);
	        }
	      } else if (showPrevMore && showNextMore) {
	        var offset = Math.floor(pagerCount / 2) - 1;
	        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
	          array.push(_i2);
	        }
	      } else {
	        for (var _i3 = 2; _i3 < pageCount; _i3++) {
	          array.push(_i3);
	        }
	      }

	      this.showPrevMore = showPrevMore;
	      this.showNextMore = showNextMore;

	      return array;
	    }
	  },

	  data: function data() {
	    return {
	      current: null,
	      showPrevMore: false,
	      showNextMore: false,
	      quicknextIconClass: 'el-icon-more',
	      quickprevIconClass: 'el-icon-more'
	    };
	  }
	};

/***/ },

/***/ 193:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('ul', {
	    staticClass: "el-pager",
	    on: {
	      "click": onPagerClick
	    }
	  }, [(pageCount > 0) ? _h('li', {
	    staticClass: "number",
	    class: {
	      active: currentPage === 1
	    }
	  }, ["1"]) : _e(), " ", (showPrevMore) ? _h('li', {
	    staticClass: "el-icon more btn-quickprev",
	    class: [quickprevIconClass],
	    on: {
	      "mouseenter": function($event) {
	        quickprevIconClass = 'el-icon-d-arrow-left'
	      },
	      "mouseleave": function($event) {
	        quickprevIconClass = 'el-icon-more'
	      }
	    }
	  }) : _e(), " ", (pagers) && _l((pagers), function(pager) {
	    return _h('li', {
	      staticClass: "number",
	      class: {
	        active: currentPage === pager
	      }
	    }, [_s(pager)])
	  }), " ", (showNextMore) ? _h('li', {
	    staticClass: "el-icon more btn-quicknext",
	    class: [quicknextIconClass],
	    on: {
	      "mouseenter": function($event) {
	        quicknextIconClass = 'el-icon-d-arrow-right'
	      },
	      "mouseleave": function($event) {
	        quicknextIconClass = 'el-icon-more'
	      }
	    }
	  }) : _e(), " ", (pageCount > 1) ? _h('li', {
	    staticClass: "number",
	    class: {
	      active: currentPage === pageCount
	    }
	  }, [_s(pageCount)]) : _e()])
	}},staticRenderFns: []}

/***/ },

/***/ 194:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/select");

/***/ },

/***/ 195:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/option");

/***/ }

/******/ });