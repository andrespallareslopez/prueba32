'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.mysearch = undefined;

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _inputbusqueda = require('src/shared/templ/inputbusqueda01.html!text');

var _inputbusqueda2 = _interopRequireDefault(_inputbusqueda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mysearch = exports.mysearch = (_dec = (0, _componentDecorator.Component)({
   selector: 'my-search',
   textTemplate: _inputbusqueda2.default
}), _dec(_class = function mysearch() {
   _classCallCheck(this, mysearch);
}) || _class);