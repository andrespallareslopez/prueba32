'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webform = undefined;

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _myform = require('src/shared/templ/myform01.html!text');

var _myform2 = _interopRequireDefault(_myform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenaformstring = '\n  <form id="form01" class="form-fix-basic-01 " >\n    <my-calendar id="cal1"></my-calendar>\n    <my-input></my-input>\n    <my-search id="search01"></my-search>\n    <my-combo id="combo01"></my-combo>\n    <my-calendar id="cal2"></my-calendar>\n    <my-combo id="combo02"></my-combo>\n</form>\n';

var webform = exports.webform = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-form',
  textTemplate: _myform2.default,
  cssUrls: ['src/components/forms/03form-fix-basic-01.css']
}), _dec(_class = function webform() {
  _classCallCheck(this, webform);
}) || _class);