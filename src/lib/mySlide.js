'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.myslide = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _slide = require('src/components/slides/slide01.html!text');

var _slide2 = _interopRequireDefault(_slide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var slideReact = _react2.default.createElement(
  'div',
  { className: 'slide-container' },
  _react2.default.createElement(
    'button',
    { className: 'slide-button left' },
    _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-2x' })
  ),
  _react2.default.createElement(
    'div',
    { className: 'slide-items' },
    _react2.default.createElement(
      'ul',
      { className: 'cf' },
      _react2.default.createElement(
        'li',
        null,
        '1'
      ),
      _react2.default.createElement(
        'li',
        null,
        '2'
      ),
      _react2.default.createElement(
        'li',
        null,
        '3'
      ),
      _react2.default.createElement(
        'li',
        null,
        '4'
      )
    )
  ),
  _react2.default.createElement(
    'button',
    { className: 'slide-button right' },
    _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-2x' })
  ),
  _react2.default.createElement('div', { className: 'slide-controls' })
);
var myslide = exports.myslide = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-slide',
  ReactDOM: _reactDom2.default,
  templateReact: slideReact,
  //textTemplate:cadenaslide,
  cssUrls: ['src/components/slides/04slide-container.css', 'src/components/list/03List-group-buttons.css'],
  importsUrl: ['bower/hammerjs/hammer.min.js', 'src/componentsImports/componentsslidecontainer.js']
}), _dec(_class = function () {
  function myslide() {
    _classCallCheck(this, myslide);
  }

  _createClass(myslide, [{
    key: 'initevent',
    value: function initevent(options, id) {

      //Si no definimos esto no saldra el panel
      //dibujado sus elementos li porque
      //hemos puesto por defecto que salga
      //oculto hasta que no inicializemos
      //el slide.
      var slide = new controls.slide();
    }
  }, {
    key: 'resize',
    value: function resize() {
      console.log("Estoy en resize de mySlide");
    }
  }]);

  return myslide;
}()) || _class);