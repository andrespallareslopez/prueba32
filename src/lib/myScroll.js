'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.webscroll = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

/*
  podemos utilizar tanto cadenascroll03 como cadenaScroll06React

  Podemos tambien importar el css con instrucciones import
*/

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _scroll = require('src/shared/templ/scroll03.html!text');

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import 'src/components/panel/04PanelScroll02.css'

var cadenaScroll06React = _react2.default.createElement('my-tab', null);
var webscroll = exports.webscroll = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-scroll',
    ReactDOM: _reactDom2.default,
    templateReact: cadenaScroll06React
    //textTemplate: cadenascroll03,
    //cssUrls:['src/components/panel/04PanelScroll02.css']
}), _dec(_class = function () {
    function webscroll() {
        _classCallCheck(this, webscroll);
    }

    _createClass(webscroll, [{
        key: 'initevent',
        value: function initevent() {
            console.log("estoy en webscroll");
        }
    }]);

    return webscroll;
}()) || _class);