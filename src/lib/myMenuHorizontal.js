'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mymenuhorizontal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenamenuhorizontalstring = '\n    <ul id="menuhorizontal01" class="menu-horizontal">\n    <li class="parent element pr"><a class="element-link gr ripple" href="#">Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>\n        <div class="sub-menu sb">\n            <a class="back-element bk ripple" href="#"><span class="fa fa-chevron-left push-float-left" ></span>Back</a>\n            <a class="element-link el ripple" href="#/template1">SubLink 1</a>\n            <a class="element-link el ripple" href="#/template2">SubLink 2</a>\n            <a class="element-link el ripple" href="#/template3">SubLink 3</a>\n            <a class="element-link el ripple" href="#/template4">SubLink 4</a>\n            <a class="element-link el ripple" href="#/template5">SubLink 5</a>\n        </div>\n    </li>\n    <li class="element item itm"><a class="element-link el ripple" href="#/template6">Link 2</a></li>\n    <li class="parent element pr"><a class="element-link gr ripple" href="#">Link 3<span class="fa fa-chevron-right push-float-right" ></span></a>\n        <div class="sub-menu sb">\n            <a class="back-element bk ripple" href="#"><span class="fa fa-chevron-left push-float-left" ></span> Back</a>\n            <a class="element-link el ripple" href="#/template7">SubLink 1</a>\n            <a class="element-link el ripple" href="#/template8">SubLink 2</a>\n\n        </div>\n    </li>\n    <li class="element item itm"><a class="element-link el ripple" href="#/template12">Link 4</a></li>\n\n    </ul>\n';
var mymenuhorizontal = exports.mymenuhorizontal = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-menu-horizontal-01',
    textTemplate: cadenamenuhorizontalstring,
    cssUrls: ['src/components/menu-horizontal/03menu-horizontal01.css']
}), _dec(_class = function () {
    function mymenuhorizontal() {
        _classCallCheck(this, mymenuhorizontal);
    }

    _createClass(mymenuhorizontal, [{
        key: 'initevent',
        value: function initevent(options, id) {}
    }]);

    return mymenuhorizontal;
}()) || _class);