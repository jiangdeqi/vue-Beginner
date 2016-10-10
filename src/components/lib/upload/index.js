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

	module.exports = __webpack_require__(316);


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Upload = __webpack_require__(317);

	Upload.install = function (Vue) {
	  Vue.component(Upload.name, Upload);
	};

	module.exports = Upload;

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(318)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	module.exports = __vue_exports__


/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _uploadList = __webpack_require__(319);

	var _uploadList2 = _interopRequireDefault(_uploadList);

	var _upload = __webpack_require__(322);

	var _upload2 = _interopRequireDefault(_upload);

	var _iframeUpload = __webpack_require__(329);

	var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

	var _index = __webpack_require__(331);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function noop() {}

	exports.default = {
	  name: 'el-upload',

	  components: {
	    ElProgress: _index2.default,
	    UploadList: _uploadList2.default,
	    Upload: _upload2.default,
	    IframeUpload: _iframeUpload2.default
	  },

	  props: {
	    action: {
	      type: String,
	      required: true
	    },
	    headers: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    multiple: {
	      type: Boolean,
	      default: false
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: {
	      type: Boolean,
	      default: false
	    },
	    thumbnailMode: Boolean,
	    showUploadList: {
	      type: Boolean,
	      default: true
	    },
	    accept: String,
	    type: {
	      type: String,
	      default: 'select'
	    },
	    beforeUpload: Function,
	    onRemove: {
	      type: Function,
	      default: noop
	    },
	    onChange: {
	      type: Function,
	      default: noop
	    },
	    onPreview: {
	      type: Function,
	      default: noop
	    },
	    onSuccess: {
	      type: Function,
	      default: noop
	    },
	    onError: {
	      type: Function,
	      default: noop
	    }
	  },

	  data: function data() {
	    return {
	      uploadedFiles: [],
	      dragOver: false,
	      draging: false,
	      tempIndex: 1
	    };
	  },


	  methods: {
	    handleStart: function handleStart(file) {
	      file.uid = Date.now() + this.tempIndex++;
	      var _file = {
	        status: 'uploading',
	        name: file.name,
	        size: file.size,
	        percentage: 0,
	        uid: file.uid,
	        showProgress: true
	      };

	      if (this.thumbnailMode) {
	        try {
	          _file.url = URL.createObjectURL(file);
	        } catch (err) {
	          console.log(err);
	          return;
	        }
	      }

	      this.uploadedFiles.push(_file);
	    },
	    handleProgress: function handleProgress(ev, file) {
	      var _file = this.getFile(file);
	      _file.percentage = ev.percent;
	    },
	    handleSuccess: function handleSuccess(res, file) {
	      var _file = this.getFile(file);

	      if (_file) {
	        _file.status = 'finished';
	        _file.response = res;

	        this.onSuccess(_file, this.uploadedFiles);

	        setTimeout(function () {
	          _file.showProgress = false;
	        }, 1000);
	      }
	    },
	    handleError: function handleError(err, file) {
	      var _file = this.getFile(file);
	      var fileList = this.uploadedFiles;

	      _file.status = 'fail';

	      fileList.splice(fileList.indexOf(_file), 1);

	      this.onError(err, _file, fileList);
	    },
	    handleRemove: function handleRemove(file) {
	      var fileList = this.uploadedFiles;
	      fileList.splice(fileList.indexOf(file), 1);
	      this.onRemove(file, fileList);
	    },
	    getFile: function getFile(file) {
	      var fileList = this.uploadedFiles;
	      var target;
	      fileList.every(function (item) {
	        target = file.uid === item.uid ? item : null;
	        return !target;
	      });
	      return target;
	    },
	    handlePreview: function handlePreview(file) {
	      if (file.status === 'finished') {
	        this.onPreview(file);
	      }
	    }
	  },

	  render: function render(h) {
	    var uploadList;

	    if (this.showUploadList && !this.thumbnailMode && this.uploadedFiles.length) {
	      uploadList = h(
	        _uploadList2.default,
	        {
	          attrs: {
	            files: this.uploadedFiles
	          },
	          on: {
	            remove: this.handleRemove,
	            preview: this.handlePreview
	          }
	        },
	        []
	      );
	    }

	    var props = {
	      props: {
	        type: this.type,
	        action: this.action,
	        multiple: this.multiple,
	        'before-upload': this.beforeUpload,
	        'with-credentials': this.withCredentials,
	        headers: this.headers,
	        name: this.name,
	        accept: this.thumbnailMode ? 'image/*' : this.accept,
	        'on-start': this.handleStart,
	        'on-progress': this.handleProgress,
	        'on-success': this.handleSuccess,
	        'on-error': this.handleError,
	        'on-preview': this.handlePreview,
	        'on-remove': this.handleRemove
	      }
	    };

	    var uploadComponent = typeof FormData !== 'undefined' ? h(
	      'upload',
	      props,
	      [this.$slots.default]
	    ) : h(
	      'iframeUpload',
	      props,
	      [this.$slots.default]
	    );

	    if (this.type === 'select') {
	      return h(
	        'div',
	        { 'class': 'el-upload' },
	        [uploadList, uploadComponent, this.$slots.tip]
	      );
	    }

	    if (this.type === 'drag') {
	      return h(
	        'div',
	        { 'class': 'el-upload' },
	        [uploadComponent, this.$slots.tip, uploadList]
	      );
	    }
	  }
	};

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(320)

	/* template */
	var __vue_template__ = __webpack_require__(321)
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

/***/ 320:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  props: {
	    files: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  methods: {
	    parsePercentage: function parsePercentage(val) {
	      return parseInt(val, 10);
	    }
	  }
	};

/***/ },

/***/ 321:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('transition-group', {
	    staticClass: "el-upload__files",
	    attrs: {
	      "tag": "ul",
	      "name": "list"
	    }
	  }, [(files) && _l((files), function(file) {
	    return _h('li', {
	      key: file,
	      staticClass: "el-upload__file",
	      class: {
	        'is-finished': file.status === 'finished'
	      },
	      on: {
	        "click": function($event) {
	          $emit('clickFile', file)
	        }
	      }
	    }, [_h('a', {
	      staticClass: "el-upload__file__name",
	      on: {
	        "click": function($event) {
	          $emit('preview', file)
	        }
	      }
	    }, [_m(0), _s(file.name) + "\n    "]), " ", _h('span', {
	      directives: [{
	        name: "show",
	        value: (file.status === 'finished'),
	        expression: "file.status === 'finished'"
	      }],
	      staticClass: "el-upload__btn-delete",
	      on: {
	        "click": function($event) {
	          $emit('remove', file)
	        }
	      }
	    }, ["删除"]), " ", (file.showProgress) ? _h('el-progress', {
	      attrs: {
	        "stroke-width": 2,
	        "percentage": parsePercentage(file.percentage),
	        "status": file.status === 'finished' && file.showProgress ? 'success' : ''
	      }
	    }) : _e()])
	  })])
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "el-icon-document"
	  })
	}}]}

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(323)

	/* template */
	var __vue_template__ = __webpack_require__(328)
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

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _ajax = __webpack_require__(324);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _cover = __webpack_require__(325);

	var _cover2 = _interopRequireDefault(_cover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    Cover: _cover2.default
	  },
	  props: {
	    type: String,
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    headers: Object,
	    withCredentials: Boolean,
	    multiple: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },

	  data: function data() {
	    return {
	      dragOver: false,
	      mouseover: false
	    };
	  },


	  computed: {
	    lastestFile: function lastestFile() {
	      var uploadedFiles = this.$parent.uploadedFiles;
	      return uploadedFiles[uploadedFiles.length - 1];
	    },
	    showCover: function showCover() {
	      var file = this.lastestFile;
	      return this.thumbnailMode && file && file.status !== 'fail';
	    },
	    thumbnailMode: function thumbnailMode() {
	      return this.$parent.thumbnailMode;
	    }
	  },

	  methods: {
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleChange: function handleChange(ev) {
	      var files = ev.target.files;

	      if (!files) {
	        return;
	      }
	      this.uploadFiles(files);
	    },
	    uploadFiles: function uploadFiles(files) {
	      var _this = this;

	      var postFiles = Array.prototype.slice.call(files);
	      if (!this.multiple) {
	        postFiles = postFiles.slice(0, 1);
	      }

	      if (postFiles.length === 0) {
	        return;
	      }

	      postFiles.forEach(function (file) {
	        var isImage = _this.isImage(file.type);

	        if (_this.thumbnailMode && !isImage) {
	          return;
	        } else {
	          _this.upload(file);
	        }
	      });
	    },
	    upload: function upload(file) {
	      var _this2 = this;

	      if (!this.beforeUpload) {
	        return this.post(file);
	      }

	      var before = this.beforeUpload(file);
	      if (before && before.then) {
	        before.then(function (processedFile) {
	          if (Object.prototype.toString.call(processedFile) === '[object File]') {
	            _this2.post(processedFile);
	          } else {
	            _this2.post(file);
	          }
	        }, function () {});
	      } else if (before !== false) {
	        this.post(file);
	      } else {}
	    },
	    post: function post(file) {
	      var _this3 = this;

	      this.onStart(file);
	      var formData = new FormData();
	      formData.append(this.name, file);

	      (0, _ajax2.default)(this.action, {
	        headers: this.headers,
	        withCredentials: this.withCredentials,
	        file: file,
	        filename: this.name,
	        onProgress: function onProgress(e) {
	          _this3.onProgress(e, file);
	        },
	        onSuccess: function onSuccess(res) {
	          _this3.onSuccess(res, file);
	        },
	        onError: function onError(err) {
	          _this3.onError(err, file);
	        }
	      });
	    },
	    onDrop: function onDrop(e) {
	      this.dragOver = false;
	      this.uploadFiles(e.dataTransfer.files);
	    },
	    handleClick: function handleClick() {
	      this.$refs.input.click();
	    }
	  }
	};

/***/ },

/***/ 324:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = upload;
	function getError(action, option, xhr) {
	  var msg = 'cannot post ' + action + ' ' + xhr.status + '\'';
	  var err = new Error(msg);
	  err.status = xhr.status;
	  err.method = 'post';
	  err.url = action;
	  return err;
	}

	function getBody(xhr) {
	  var text = xhr.responseText || xhr.response;
	  if (!text) {
	    return text;
	  }

	  try {
	    return JSON.parse(text);
	  } catch (e) {
	    return text;
	  }
	}

	function upload(action, option) {
	  if (typeof XMLHttpRequest === 'undefined') {
	    return;
	  }

	  var xhr = new XMLHttpRequest();
	  if (xhr.upload) {
	    xhr.upload.onprogress = function progress(e) {
	      if (e.total > 0) {
	        e.percent = e.loaded / e.total * 100;
	      }
	      option.onProgress(e);
	    };
	  }

	  var formData = new FormData();

	  if (option.data) {
	    Object.keys(option.data).map(function (key) {
	      formData.append(key, option.data[key]);
	    });
	  }

	  formData.append(option.filename, option.file);

	  xhr.onerror = function error(e) {
	    option.onError(e);
	  };

	  xhr.onload = function onload() {
	    if (xhr.status < 200 || xhr.status >= 300) {
	      return option.onError(getError(action, option, xhr), getBody(xhr));
	    }

	    option.onSuccess(getBody(xhr));
	  };

	  xhr.open('post', action, true);

	  if (option.withCredentials && 'withCredentials' in xhr) {
	    xhr.withCredentials = true;
	  }

	  var headers = option.headers || {};

	  for (var item in headers) {
	    if (headers.hasOwnProperty(item) && headers[item] !== null) {
	      xhr.setRequestHeader(item, headers[item]);
	    }
	  }
	  xhr.send(formData);
	}

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(326)

	/* template */
	var __vue_template__ = __webpack_require__(327)
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

/***/ 326:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = {
	  props: {
	    image: {},
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },
	  data: function data() {
	    return {
	      mouseover: false
	    };
	  }
	};

/***/ },

/***/ 327:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return (image) ? _h('div', {
	    staticClass: "el-dragger__cover",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_h('transition', {
	    attrs: {
	      "name": "fade-in"
	    }
	  }, [(image.status === 'uploading') ? _h('el-progress', {
	    staticClass: "el-dragger__cover__progress",
	    attrs: {
	      "percentage": image.percentage,
	      "show-text": false,
	      "status": image.status === 'finished' ? 'success' : ''
	    }
	  }) : _e()]), " ", (image.status === 'finished') ? _h('div', {
	    staticClass: "el-dragger__cover__content",
	    on: {
	      "mouseenter": function($event) {
	        mouseover = true
	      },
	      "mouseleave": function($event) {
	        mouseover = false
	      }
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": image.url
	    }
	  }), " ", _h('transition', {
	    attrs: {
	      "name": "fade-in"
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      value: (mouseover),
	      expression: "mouseover"
	    }],
	    staticClass: "el-dragger__cover__interact"
	  }, [_h('div', {
	    staticClass: "el-draggeer__cover__btns"
	  }, [_h('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        $parent.handleClick()
	      }
	    }
	  }, [_m(0), _m(1)]), " ", _h('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        onPreview(image)
	      }
	    }
	  }, [_m(2), _m(3)]), " ", _h('span', {
	    staticClass: "btn",
	    on: {
	      "click": function($event) {
	        onRemove(image)
	      }
	    }
	  }, [_m(4), _m(5)])])])]), " ", _h('transition', {
	    attrs: {
	      "name": "md-fade-top"
	    }
	  }, [_h('h4', {
	    directives: [{
	      name: "show",
	      value: (mouseover),
	      expression: "mouseover"
	    }],
	    staticClass: "el-dragger__cover__title"
	  }, [_s(image.name)])])]) : _e()]) : _e()
	}},staticRenderFns: [function (){with(this) {
	  return _h('i', {
	    staticClass: "el-icon-upload2"
	  })
	}},function (){with(this) {
	  return _h('span', ["继续上传"])
	}},function (){with(this) {
	  return _h('i', {
	    staticClass: "el-icon-view"
	  })
	}},function (){with(this) {
	  return _h('span', ["查看图片"])
	}},function (){with(this) {
	  return _h('i', {
	    staticClass: "el-icon-delete2"
	  })
	}},function (){with(this) {
	  return _h('span', ["删除"])
	}}]}

/***/ },

/***/ 328:
/***/ function(module, exports) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "el-upload__inner",
	    class: {
	      'el-dragger': type === 'drag',
	        'is-dragOver': dragOver,
	        'is-showCover': showCover
	    },
	    on: {
	      "click": handleClick,
	      "drop": function($event) {
	        $event.preventDefault();
	        onDrop($event)
	      },
	      "dragover": function($event) {
	        $event.preventDefault();
	        dragOver = true
	      },
	      "dragleave": function($event) {
	        $event.preventDefault();
	        dragOver = false
	      }
	    }
	  }, [(!showCover) ? _t("default") : _h('cover', {
	    attrs: {
	      "image": lastestFile,
	      "on-preview": onPreview,
	      "on-remove": onRemove
	    }
	  }), " ", " ", _h('input', {
	    ref: "input",
	    staticClass: "el-upload__input",
	    attrs: {
	      "type": "file",
	      "multiple": multiple,
	      "accept": accept
	    },
	    on: {
	      "change": handleChange
	    }
	  })])
	}},staticRenderFns: []}

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(330)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (typeof __vue_exports__.default === "object") {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	module.exports = __vue_exports__


/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _cover = __webpack_require__(325);

	var _cover2 = _interopRequireDefault(_cover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    Cover: _cover2.default
	  },
	  props: {
	    type: String,
	    data: {},
	    action: {
	      type: String,
	      required: true
	    },
	    name: {
	      type: String,
	      default: 'file'
	    },
	    withCredentials: Boolean,
	    multiple: Boolean,
	    accept: String,
	    onStart: Function,
	    onProgress: Function,
	    onSuccess: Function,
	    onError: Function,
	    beforeUpload: Function,
	    onPreview: {
	      type: Function,
	      default: function _default() {}
	    },
	    onRemove: {
	      type: Function,
	      default: function _default() {}
	    }
	  },

	  data: function data() {
	    return {
	      dragOver: false,
	      mouseover: false,
	      domain: '',
	      file: null,
	      disabled: false
	    };
	  },


	  computed: {
	    lastestFile: function lastestFile() {
	      var uploadedFiles = this.$parent.uploadedFiles;
	      return uploadedFiles[uploadedFiles.length - 1];
	    },
	    showCover: function showCover() {
	      var file = this.lastestFile;
	      return this.thumbnailMode && file && file.status !== 'fail';
	    },
	    thumbnailMode: function thumbnailMode() {
	      return this.$parent.thumbnailMode;
	    }
	  },

	  methods: {
	    resetIframe: function resetIframe() {
	      var iframeNode = this.getIframeNode();
	      var win = iframeNode.contentWindow;
	      var doc = win.document;

	      doc.open('text/html', 'replace');
	      doc.write(this.getIframeHTML(this.domain));
	      doc.close();
	    },
	    getIframeHTML: function getIframeHTML(domain) {
	      var domainScript = '';
	      if (domain) {
	        domainScript = '<script>document.domain="' + domain + '";<' + '/script>';
	      }
	      return '\n      <!DOCTYPE html>\n      <html>\n      <head>\n      <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n      ' + domainScript + '\n      </head>\n      <body>\n      </body>\n      </html>\n      ';
	    },
	    isImage: function isImage(str) {
	      return str.indexOf('image') !== -1;
	    },
	    handleClick: function handleClick() {
	      if (!this.disabled) {
	        this.$refs.input.click();
	      }
	    },
	    handleChange: function handleChange(ev) {
	      var files = ev.target.files;
	      this.file = files;

	      this.onStart(files);

	      var formNode = this.getFormNode();
	      var dataSpan = this.getFormDataNode();
	      var data = this.data;
	      if (typeof data === 'function') {
	        data = data(files);
	      }
	      var inputs = [];
	      for (var key in data) {
	        if (data.hasOwnProperty(key)) {
	          inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
	        }
	      }
	      dataSpan.innerHTML = inputs.join('');
	      formNode.submit();
	      dataSpan.innerHTML = '';
	      this.disabled = true;
	    },
	    onLoad: function onLoad() {
	      var response = void 0;
	      var eventFile = this.file;
	      if (!eventFile) {
	        return;
	      }
	      try {
	        var doc = this.getIframeDocument();
	        var script = doc.getElementsByTagName('script')[0];
	        if (script && script.parentNode === doc.body) {
	          doc.body.removeChild(script);
	        }
	        response = doc.body.innerHTML;
	        this.onSuccess(response, eventFile);
	      } catch (err) {
	        console.log(err);
	        console.warn(false, 'cross domain error for Upload');
	        this.onError(err, eventFile);
	      }
	      this.resetIframe();
	      this.disabled = false;
	    },
	    onDrop: function onDrop(e) {
	      e.preventDefault();
	      this.dragOver = false;
	      this.uploadFiles(e.dataTransfer.files);
	    },
	    handleDragover: function handleDragover(e) {
	      e.preventDefault();
	      this.onDrop = true;
	    },
	    handleDragleave: function handleDragleave(e) {
	      e.preventDefault();
	      this.onDrop = false;
	    },
	    getIframeNode: function getIframeNode() {
	      return this.$refs.iframe;
	    },
	    getIframeDocument: function getIframeDocument() {
	      return this.getIframeNode().contentDocument;
	    },
	    getFormNode: function getFormNode() {
	      return this.$refs.form;
	    },
	    getFormDataNode: function getFormDataNode() {
	      return this.$refs.data;
	    }
	  },

	  render: function render(h) {
	    var cover = h(
	      'cover',
	      {
	        attrs: { image: this.lastestFile, onPreview: this.onPreview, onRemove: this.onRemove }
	      },
	      []
	    );
	    var frameName = 'frame-' + Date.now();
	    return h(
	      'div',
	      {
	        'class': {
	          'el-upload__inner': true,
	          'el-dragger': this.type === 'drag',
	          'is-dragOver': this.dragOver,
	          'is-showCover': this.showCover
	        },
	        on: {
	          click: this.handleClick
	        },
	        nativeOn: {
	          drop: this.onDrop,
	          dragover: this.handleDragover,
	          dragleave: this.handleDragleave
	        }
	      },
	      [h(
	        'iframe',
	        {
	          ref: 'iframe',
	          on: {
	            load: this.onLoad
	          },
	          attrs: {
	            name: frameName
	          }
	        },
	        []
	      ), h(
	        'form',
	        { ref: 'form', attrs: { action: this.action, target: frameName, enctype: 'multipart/form-data', method: 'POST' }
	        },
	        [h(
	          'input',
	          {
	            'class': 'el-upload__input',
	            attrs: { type: 'file',

	              name: 'file',

	              multiple: this.multiple,
	              accept: this.accept },
	            ref: 'input', on: {
	              change: this.handleChange
	            }
	          },
	          []
	        ), h(
	          'input',
	          {
	            attrs: { type: 'hidden', name: 'documentDomain', value: document.domain }
	          },
	          []
	        ), h(
	          'span',
	          { ref: 'data' },
	          []
	        )]
	      ), !this.showCover ? this.$slots.default : cover]
	    );
	  }
	};

/***/ },

/***/ 331:
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/progress");

/***/ }

/******/ });