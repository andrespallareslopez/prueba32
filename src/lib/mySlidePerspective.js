'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.myslidePerspective = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _slide04perspective = require('src/components/slides/slide04perspective.html!text');

var _slide04perspective2 = _interopRequireDefault(_slide04perspective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myslidePerspective = exports.myslidePerspective = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-slide-perspective',
    textTemplate: _slide04perspective2.default,
    cssUrls: ['src/components/slides/04slide-Perspective01.css'],
    importsUrl: ['src/componentsImports/componentsSlidePerspective.js']
}), _dec(_class = function () {
    function myslidePerspective() {
        _classCallCheck(this, myslidePerspective);
    }

    _createClass(myslidePerspective, [{
        key: 'initevent',
        value: function initevent(options, id) {
            var slidep = new controls.slidePerspective();
        }
    }]);

    return myslidePerspective;
}()) || _class);