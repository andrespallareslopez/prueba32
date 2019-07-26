'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.myimput = undefined;

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _input = require('src/shared/templ/input01.html!text');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myimput = exports.myimput = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-input',
    textTemplate: _input2.default
}), _dec(_class = function myimput() {
    _classCallCheck(this, myimput);
}) || _class);