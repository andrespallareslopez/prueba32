'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.myTabs01 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _Tabs = require('src/shared/templ/Tabs01.html!text');

var _Tabs2 = _interopRequireDefault(_Tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var myTabs01 = exports.myTabs01 = (_dec = (0, _componentDecorator.Component)({
    selector: "my-tab",
    textTemplate: _Tabs2.default,
    cssUrls: ['src/components/tabs/tabs01.css'],
    importsUrl: ['src/componentsImports/componentstabcontainer.js']
}), _dec(_class = function () {
    function myTabs01() {
        _classCallCheck(this, myTabs01);
    }

    _createClass(myTabs01, [{
        key: 'initevent',
        value: function initevent(options, id) {
            //console.dir(controls) 
            var tabs = new controls.tab();
        }
    }]);

    return myTabs01;
}()) || _class);