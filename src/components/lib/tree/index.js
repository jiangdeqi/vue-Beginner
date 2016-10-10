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

	module.exports = __webpack_require__(306);


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

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Tree = __webpack_require__(307);

	Tree.install = function (Vue) {
	  Vue.component(Tree.name, Tree);
	};

	module.exports = Tree;

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(308)

	/* template */
	var __vue_template__ = __webpack_require__(315)
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

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _tree = __webpack_require__(309);

	var _tree2 = _interopRequireDefault(_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-tree',

	  props: {
	    data: {
	      type: Array
	    },
	    showCheckbox: {
	      type: Boolean,
	      default: false
	    },
	    props: {
	      default: function _default() {
	        return {
	          children: 'children',
	          label: 'label',
	          icon: 'icon'
	        };
	      }
	    },
	    lazy: {
	      type: Boolean,
	      default: false
	    },
	    load: {
	      type: Function
	    }
	  },

	  created: function created() {
	    this.$isTree = true;

	    this.tree = new _tree2.default({
	      data: this.data,
	      lazy: this.lazy,
	      props: this.props,
	      load: this.load
	    });
	  },
	  data: function data() {
	    return {
	      tree: {}
	    };
	  },


	  components: {
	    ElTreeNode: __webpack_require__(311)
	  },

	  computed: {
	    children: {
	      set: function set(value) {
	        this.data = value;
	      },
	      get: function get() {
	        return this.data;
	      }
	    }
	  },

	  methods: {
	    getCheckedNodes: function getCheckedNodes(leafOnly) {
	      return this.tree.getCheckedNodes(leafOnly);
	    }
	  }
	};

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _node = __webpack_require__(310);

	var _node2 = _interopRequireDefault(_node);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tree = function () {
	  function Tree(options) {
	    var _this = this;

	    _classCallCheck(this, Tree);

	    for (var option in options) {
	      if (options.hasOwnProperty(option)) {
	        this[option] = options[option];
	      }
	    }

	    this._isTree = true;

	    this.root = new _node2.default({
	      data: this.data,
	      lazy: this.lazy,
	      props: this.props,
	      load: this.load
	    });

	    if (this.lazy && this.load) {
	      var loadFn = this.load;
	      loadFn(this.root, function (data) {
	        _this.root.doCreateChildren(data);
	      });
	    }
	  }

	  Tree.prototype.getCheckedNodes = function getCheckedNodes(leafOnly) {
	    var checkedNodes = [];
	    var walk = function walk(node) {
	      var children = node.children;

	      children.forEach(function (child) {
	        if (!leafOnly && child.checked || leafOnly && !child.hasChild && child.checked) {
	          checkedNodes.push(child.data);
	        } else {
	          checkedNodes.push(child.data);
	        }

	        walk(child);
	      });
	    };

	    walk(this);

	    return checkedNodes;
	  };

	  return Tree;
	}();

	exports.default = Tree;
	;

/***/ },

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _objectAssign = __webpack_require__(274);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var idSeed = 0;


	var reInitChecked = function reInitChecked(node) {
	  var siblings = node.children;

	  var all = true;
	  var none = true;

	  for (var i = 0, j = siblings.length; i < j; i++) {
	    var sibling = siblings[i];
	    if (sibling.checked !== true || sibling.indeterminate) {
	      all = false;
	    }
	    if (sibling.checked !== false || sibling.indeterminate) {
	      none = false;
	    }
	  }

	  if (all) {
	    node.setChecked(true);
	  } else if (!all && !none) {
	    node.setChecked('half');
	  } else if (none) {
	    node.setChecked(false);
	  }
	};

	var getPropertyFromData = function getPropertyFromData(node, prop) {
	  var props = node.props;
	  var data = node.data;
	  var config = props[prop];

	  if (typeof config === 'function') {
	    return config(data, node);
	  } else if (typeof config === 'string') {
	    return data[config];
	  } else if (typeof config === 'undefined') {
	    return '';
	  }
	};

	var Node = function () {
	  function Node(options) {
	    _classCallCheck(this, Node);

	    this.id = idSeed++;
	    this.text = null;
	    this.checked = false;
	    this.indeterminate = false;
	    this.data = null;
	    this.expanded = false;
	    this.props = null;
	    this.parent = null;
	    this.lazy = false;

	    for (var name in options) {
	      if (options.hasOwnProperty(name)) {
	        this[name] = options[name];
	      }
	    }

	    this.level = -1;
	    this.loaded = false;
	    this.children = [];
	    this.loading = false;

	    if (this.parent) {
	      this.level = this.parent.level + 1;
	    }

	    if (this.lazy !== true && this.data) {
	      var children = void 0;
	      if (this.level === -1 && this.data instanceof Array) {
	        children = this.data;
	      } else {
	        children = getPropertyFromData(this, 'children') || [];
	      }

	      for (var i = 0, j = children.length; i < j; i++) {
	        var child = children[i];
	        this.insertChild(new Node({
	          data: child,
	          parent: this,
	          lazy: this.lazy,
	          load: this.load,
	          props: this.props
	        }));
	      }
	    }
	  }

	  Node.prototype.insertChild = function insertChild(child, index) {
	    if (!child) throw new Error('insertChild error: child is required.');

	    if (!child instanceof Node) {
	      throw new Error('insertChild error: child should an instance of Node.');
	    }

	    child.parent = this;
	    child.level = this.level + 1;

	    if (typeof index === 'undefined') {
	      this.children.push(child);
	    } else {
	      this.children.splice(index, 0, child);
	    }
	  };

	  Node.prototype.removeChild = function removeChild(child) {
	    var index = this.children.indexOf(child);

	    if (index > -1) {
	      child.parent = null;
	      this.children.splice(child, index);
	    }
	  };

	  Node.prototype.expand = function expand(callback) {
	    if (this.shouldLoadData()) {
	      this.loadData(function (data) {
	        if (data instanceof Array) {
	          callback();
	        }
	      });
	    } else {
	      this.expanded = true;
	      if (callback) {
	        callback();
	      }
	    }
	  };

	  Node.prototype.doCreateChildren = function doCreateChildren(array) {
	    var _this = this;

	    var defaultProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    array.forEach(function (item) {
	      var node = new Node((0, _objectAssign2.default)({
	        data: item,
	        lazy: _this.lazy,
	        load: _this.load,
	        props: _this.props
	      }, defaultProps));
	      _this.insertChild(node);
	    });
	  };

	  Node.prototype.collapse = function collapse() {
	    this.expanded = false;
	  };

	  Node.prototype.shouldLoadData = function shouldLoadData() {
	    return this.lazy === true && this.load && !this.loaded;
	  };

	  Node.prototype.hasChild = function hasChild() {
	    var children = this.children;
	    if (!this.lazy || this.lazy === true && this.loaded === true) {
	      return children && children.length > 0;
	    }
	    return true;
	  };

	  Node.prototype.setChecked = function setChecked(value, deep) {
	    var _this2 = this;

	    this.indeterminate = value === 'half';
	    this.checked = value === true;

	    var handleDeep = function handleDeep() {
	      if (deep) {
	        var children = _this2.children;
	        for (var i = 0, j = children.length; i < j; i++) {
	          var child = children[i];
	          child.setChecked(value !== false, deep);
	        }
	      }
	    };

	    if (this.shouldLoadData()) {
	      this.loadData(function () {
	        handleDeep();
	      }, {
	        checked: value !== false
	      });
	    } else {
	      handleDeep();
	    }

	    var parent = this.parent;
	    if (parent.level === -1) return;

	    reInitChecked(parent);
	  };

	  Node.prototype.getChildren = function getChildren() {
	    var data = this.data;
	    if (!data) return null;

	    var props = this.props;
	    var children = 'children';
	    if (props) {
	      children = props.children || 'children';
	    }

	    if (data[children] === undefined) {
	      data[children] = null;
	    }

	    return data[children];
	  };

	  Node.prototype.loadData = function loadData(callback) {
	    var _this3 = this;

	    var defaultProps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    if (this.lazy === true && this.load && !this.loaded) {
	      this.loading = true;

	      var loadFn = this.load;
	      var resolve = function resolve(children) {
	        _this3.loaded = true;
	        _this3.loading = false;

	        _this3.doCreateChildren(children, defaultProps);

	        if (callback) {
	          callback.call(_this3, children);
	        }
	      };

	      loadFn(this, resolve);
	    } else {
	      if (callback) {
	        callback.call(this);
	      }
	    }
	  };

	  _createClass(Node, [{
	    key: 'label',
	    get: function get() {
	      return getPropertyFromData(this, 'label');
	    }
	  }, {
	    key: 'icon',
	    get: function get() {
	      return getPropertyFromData(this, 'icon');
	    }
	  }, {
	    key: 'isLeaf',
	    get: function get() {
	      return !this.hasChild();
	    }
	  }]);

	  return Node;
	}();

	exports.default = Node;

/***/ },

/***/ 311:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(312)

	/* template */
	var __vue_template__ = __webpack_require__(314)
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

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _transition = __webpack_require__(313);

	var _transition2 = _interopRequireDefault(_transition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'el-tree-node',

	  props: {
	    node: {
	      default: function _default() {
	        return {};
	      }
	    }
	  },

	  components: {
	    CollapseTransition: _transition2.default
	  },

	  data: function data() {
	    return {
	      $tree: null,
	      expanded: false,
	      childrenRendered: false,
	      showCheckbox: false
	    };
	  },


	  methods: {
	    handleExpandIconClick: function handleExpandIconClick(event) {
	      var _this = this;

	      var target = event.target;
	      if (target.tagName.toUpperCase() !== 'DIV' && target.parentNode.nodeName.toUpperCase() !== 'DIV' || target.nodeName.toUpperCase() === 'LABLE') return;
	      if (this.expanded) {
	        this.node.collapse();
	        this.expanded = false;
	      } else {
	        this.node.expand(function () {
	          _this.expanded = true;
	          _this.childrenRendered = true;
	        });
	      }
	    },
	    handleUserClick: function handleUserClick() {
	      if (this.node.indeterminate) {
	        this.node.setChecked(this.node.checked, true);
	      }
	    },
	    handleCheckChange: function handleCheckChange(checked) {
	      if (!this.node.indeterminate) {
	        this.node.setChecked(checked, true);
	      }
	    }
	  },

	  created: function created() {
	    var parent = this.$parent;

	    if (parent.$isTree) {
	      this.$tree = parent;
	    } else {
	      this.$tree = parent.$tree;
	    }

	    var tree = this.$tree;

	    if (!tree) {
	      console.warn('Can not find node\'s tree.');
	    }

	    this.showCheckbox = tree.showCheckbox;
	  }
	};

/***/ },

/***/ 313:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Transition = function () {
	  function Transition() {
	    _classCallCheck(this, Transition);
	  }

	  Transition.prototype.beforeEnter = function beforeEnter(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.style.height = '0';
	    el.style.paddingTop = 0;
	    el.style.paddingBottom = 0;
	  };

	  Transition.prototype.enter = function enter(el) {
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    } else {
	      el.style.height = '';
	      el.style.paddingTop = el.dataset.oldPaddingTop;
	      el.style.paddingBottom = el.dataset.oldPaddingBottom;
	    }

	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.afterEnter = function afterEnter(el) {
	    el.style.display = '';
	    el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	  };

	  Transition.prototype.beforeLeave = function beforeLeave(el) {
	    el.dataset.oldPaddingTop = el.style.paddingTop;
	    el.dataset.oldPaddingBottom = el.style.paddingBottom;
	    el.dataset.oldOverflow = el.style.overflow;

	    el.style.display = 'block';
	    if (el.scrollHeight !== 0) {
	      el.style.height = el.scrollHeight + 'px';
	    }
	    el.style.overflow = 'hidden';
	  };

	  Transition.prototype.leave = function leave(el) {
	    if (el.scrollHeight !== 0) {
	      setTimeout(function () {
	        el.style.height = 0;
	        el.style.paddingTop = 0;
	        el.style.paddingBottom = 0;
	      });
	    }
	  };

	  Transition.prototype.afterLeave = function afterLeave(el) {
	    el.style.display = el.style.height = '';
	    el.style.overflow = el.dataset.oldOverflow;
	    el.style.paddingTop = el.dataset.oldPaddingTop;
	    el.style.paddingBottom = el.dataset.oldPaddingBottom;
	  };

	  return Transition;
	}();

	;

	exports.default = {
	  functional: true,
	  render: function render(h, _ref) {
	    var children = _ref.children;

	    var data = {
	      on: new Transition()
	    };

	    children = children.map(function (item) {
	      item.data.class = ['collapse-transition'];
	      return item;
	    });

	    return h('transition', data, children);
	  }
	};

/***/ },

/***/ 314:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tree-node",
	    class: {
	      expanded: childrenRendered && expanded
	    }
	  }, [_h('div', {
	    staticClass: "el-tree-node__content",
	    style: ({
	      'padding-left': node.level * 16 + 'px'
	    }),
	    on: {
	      "click": handleExpandIconClick
	    }
	  }, [_h('span', {
	    staticClass: "el-tree-node__expand-icon",
	    class: {
	      'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded
	    }
	  }), " ", (showCheckbox) ? _h('el-checkbox', {
	    directives: [{
	      name: "model",
	      value: (node.checked),
	      expression: "node.checked"
	    }],
	    attrs: {
	      "indeterminate": node.indeterminate
	    },
	    domProps: {
	      "value": (node.checked)
	    },
	    on: {
	      "change": handleCheckChange,
	      "input": function($event) {
	        node.checked = $event
	      }
	    },
	    nativeOn: {
	      "click": function($event) {
	        handleUserClick($event)
	      }
	    }
	  }) : _e(), " ", (node.loading) ? _h('span', {
	    staticClass: "el-tree-node__icon el-icon-loading"
	  }) : _e(), " ", _h('span', {
	    staticClass: "el-tree-node__label"
	  }, [_s(node.label)])]), " ", _h('collapse-transition', [_h('div', {
	    directives: [{
	      name: "show",
	      value: (expanded),
	      expression: "expanded"
	    }],
	    staticClass: "el-tree-node__children"
	  }, [(node.children) && _l((node.children), function(child) {
	    return _h('el-tree-node', {
	      attrs: {
	        "node": child
	      }
	    })
	  })])])])
	}},staticRenderFns: []}

/***/ },

/***/ 315:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-tree"
	  }, [(tree.root.children) && _l((tree.root.children), function(child) {
	    return _h('el-tree-node', {
	      attrs: {
	        "node": child
	      }
	    })
	  })])
	}},staticRenderFns: []}

/***/ }

/******/ });