'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Nav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _nav = require('src/shared/templ/nav01.html!text');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = exports.Nav = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-nav',
    textTemplate: _nav2.default,
    cssUrls: ['src/components/buttons/03buttonmovile01.css'],
    importsUrl: ["src/shared/js/behaviors03layout02.js"]
}), _dec(_class = function () {
    function Nav() {
        _classCallCheck(this, Nav);
    }

    _createClass(Nav, [{
        key: 'initevent',
        value: function initevent(options) {
            //console.dir(options)
            console.log("estoy en initevent en nav");
            //console.dir(window.behaviors)
            window.behaviors.navButtons03layout02();
        }
    }]);

    return Nav;
}()) || _class);