/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;
	
	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }
	
	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);
	
	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }
	
	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }
	
	    return desc;
	}
	
	/// <reference path="../../../typings/index.d.ts" />
	
	$(function () {
	    var _desc, _value, _class;
	
	    var autorize = function autorize(target, name, descriptor) {
	        console.dir(descriptor);
	        var value = descriptor.value;
	        descriptor.value = function () {
	            console.log("estoy en descriptor");
	            //value="autorize"
	            return value.apply(this, arguments);
	        };
	        return descriptor;
	    };
	
	    var Controller = (_class = function () {
	        function Controller() {
	            _classCallCheck(this, Controller);
	
	            console.log("estoy en constructor");
	        }
	
	        _createClass(Controller, [{
	            key: "action01",
	            value: function action01() {
	                console.log("estoy en action01");
	                return "ok";
	            }
	        }, {
	            key: "action02",
	            value: function action02() {
	                console.log("estoy en action02");
	            }
	        }]);
	
	        return Controller;
	    }(), (_applyDecoratedDescriptor(_class.prototype, "action01", [autorize], Object.getOwnPropertyDescriptor(_class.prototype, "action01"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "action02", [autorize], Object.getOwnPropertyDescriptor(_class.prototype, "action02"), _class.prototype)), _class);
	    ;
	
	    var controller = new Controller();
	
	    controller.action01();
	    controller.action02();
	
	    //console.log("estoy aqui");
	});

/***/ }
/******/ ]);
//# sourceMappingURL=prueba06.bundle.js.map