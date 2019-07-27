'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mylistgrpbuttons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _component = require('component');

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scrollPanelContentReact = function scrollPanelContentReact(data, nameDescripcion) {
  return _react2.default.createElement(
    'div',
    { className: 'list-grp-buttons space-top-1x' },
    data.map(function (value, index) {
      return _react2.default.createElement(
        'a',
        { className: 'list-grp-button box-shadow-3', href: '#', key: index },
        _react2.default.createElement(
          'div',
          { className: 'list-grp-content-top' },
          _react2.default.createElement(
            'span',
            { className: 'list-grp-content-text list-grp-context-text-center' },
            value[nameDescripcion]
          )
        )
      );
    })
  );
};

var mylistgrpbuttons = exports.mylistgrpbuttons = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-list-grp-buttons',
  ReactDOM: _reactDom2.default,
  //data:mesas,
  nameDescription: "descripcion",
  templateReact: scrollPanelContentReact,
  cssUrls: ['src/components/list/03List-group-buttons.css']

}), _dec(_class = function (_Container) {
  _inherits(mylistgrpbuttons, _Container);

  function mylistgrpbuttons() {
    _classCallCheck(this, mylistgrpbuttons);

    return _possibleConstructorReturn(this, (mylistgrpbuttons.__proto__ || Object.getPrototypeOf(mylistgrpbuttons)).apply(this, arguments));
  }

  _createClass(mylistgrpbuttons, [{
    key: 'initevent',
    value: function initevent(options, id) {
      console.log("Estoy en list grp buttons");
      //console.dir(this.setData)
      //console.log(id)
    }
  }, {
    key: 'setData',
    value: function setData(data, id, Template) {
      console.log('estoy dentro de seData de mylistgrpbuttons');
    }
  }, {
    key: 'reloaddata',
    value: function reloaddata(options, id) {
      //console.log("estoy en reload list grp buttons")
      //console.log(id)
    }
  }]);

  return mylistgrpbuttons;
}(_component.Container)) || _class);