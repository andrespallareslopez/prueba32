'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mypageform01 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _UXScroll = require('src/componentsImports/UXScroll.js');

var _UXPanelScroll = require('src/componentsImports/UXPanelScroll.js');

var _utilContainer = require('src/componentsImports/utilContainer.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenapagestring = '\n<div  class="wrapper page child" >\n    <div class="nav" >\n        <nav  >\n           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >\n             <span class="fa fa-chevron-left" ></span>\n             <span class="texto-btn"  > Back</span>\n           </button>\n        </nav>\n    </div>  \n    <div class="main" >\n       <main>\n          <div class="box content"  >\n                \n          </div>\n       </main>\n    </div>\n    <div class="footer">\n        <footer  >\n        <div class="push-center-inner push-center-inline-3x">\n            <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">\n            <span class="fa fa-check-circle fa-2x" ></span>\n            <span class="title" >Aceptar</span>\n            </button>\n        \n            <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">\n            <span class="fa fa-times-circle fa-2x" ></span>\n            <span class="title" >Cancelar</span>\n            </button>\n          \n    </div>\n    <my-panel-scroll-popup id=\'popup02\'></my-panel-scroll-popup>       \n            \n\n        </footer>\n    </div>\n';
var cadenapanelscroll01 = '\n<div class="panel-scroll-01" >\n  <div class="panel-scroll-content" >\n   <div class="panel-scroll-item" >\n\n   </div>\n  </div>\n  <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>\n  <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>\n</div>\n';
var cadenaformfix01 = '\n<form id="form01" class="form-fix-basic-01 ">\n\n<fieldset>\n    <legend>Login</legend>\n    <div class="group group-block">\n        <div class="label-help">\n            <span class="logo fa fa-question-circle fa-2x"></span>\n            <span class="text">Introduce usuario</span>\n        </div>\n        <div class="label-input" >\n           <span class="logo fa fa-tag fa-2x" ></span>\n           <input type="text" placeholder="User" class="input" >\n        </div>                                             \n    </div>\n    <div class="group group-block">\n        <div class="label-help">\n            <span class="logo fa fa-question-circle fa-2x"></span>\n            <span class="text">Introduce E-mail</span>\n        </div>\n        <div class="label-input">\n            <span class="logo fa fa-tag fa-2x"></span>\n            <input type="text" placeholder="E-Mail" class="input" >\n        </div>\n        <div class="label-warning" >\n            <span class="logo fa fa-warning fa-2x" ></span>\n            <span class="text">E-mail es obligatorio</span>\n        </div>\n    </div>\n\n    <div class="group group-block">\n        <div class="label-help">\n            <span class="logo fa fa-question-circle fa-2x"></span>\n            <span class="text">Introduce Password</span>\n        </div>\n        <div class="label-input">\n            <span class="logo fa fa-tag fa-2x"></span>\n            <input type="text" placeholder="Password" class="input medium">\n        </div>\n    </div>\n    <div class="group group-block">\n        <div class="label-input">\n            <span class="logo fa fa-tag fa-2x"></span>\n            <input type="text" placeholder="Confirm Password" class="input medium">\n        </div>\n        <div class="label-warning">\n            <span class="logo fa fa-warning fa-2x"></span>\n            <span class="text">Password Incorrecto</span>\n        </div>\n    </div>\n</fieldset>\n<fieldset>\n  <div class="group group-block">\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="Busqueda" class="input medium">\n        <button id="search" class="list-button"><span class="fa fa-search"></span></button>\n    </div>\n  </div>\n</fieldset>    \n<div class="group group-block">\n    <div class="label-help">\n        <span class="logo fa fa-question-circle fa-2x"></span>\n        <span class="text">Introduce grupo </span>\n    </div>\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="" class="input medium">\n        <button class="list-button"><span class="fa fa-sort-desc"></span></button>\n    </div>\n</div>\n  <div class="group group-block">\n    <div class="label-help">\n        <span class="logo fa fa-question-circle fa-2x"></span>\n        <span class="text">Introduce familia </span>\n    </div>\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="" class="input medium">\n        <button class="list-button"><span class="fa fa-sort-desc"></span></button>\n    </div>\n</div>\n  <div class="group group-block">\n    <div class="label-help">\n        <span class="logo fa fa-question-circle fa-2x"></span>\n        <span class="text">Introduce otra fecha  </span>\n    </div>\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input id="fecha1" class="input medium" type="text" placeholder="">\n        <button id="btn-fecha1" class="list-button"><span class="fa fa-calendar"></span></button>\n    </div>\n</div>\n  <div class="group group-block">\n    <div class="label-help">\n        <span class="logo fa fa-question-circle fa-2x"></span>\n        <span class="text">Introduce fecha de nacimiento </span>\n    </div>\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input id="fecha" class="input medium" type="text" placeholder="">\n        <button id="btn-fecha" class="list-button"><span class="fa fa-calendar"></span></button>\n    </div>\n</div>\n<div class="group group-block">\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="Edad" class="input small">\n    </div>\n</div>\n<div class="group group-block">\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="DNI" class="input medium">\n    </div>                                    \n</div>\n\n<div class="group group-block">\n    <div class="label-input">\n        <span class="logo fa fa-tag fa-2x"></span>\n        <input type="text" placeholder="Hora" class="input small">\n    </div>\n</div>\n</form>\n';
var $template = void 0;
var $buttonBack = void 0;
var mypageform01 = exports.mypageform01 = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-page-form-01',
    textTemplate: cadenapagestring,
    cssUrls: ['src/components/forms/03form-fix-basic-01.css']
}), _dec(_class = function () {
    function mypageform01() {
        _classCallCheck(this, mypageform01);
    }

    _createClass(mypageform01, [{
        key: 'initevent',
        value: function initevent(options, id) {
            var self = this;
            console.log("estoy en mypageform01");
            console.log(id);
            var buttonBackAnimation = new controls.UXButtonPanelChangeAnimation({
                id: id
            });

            var panel = new components.container({
                container: '#' + id + ' .wrapper.page.child .box.content',
                textTemplate: cadenapanelscroll01
            });
            panel.create(function (options) {
                var form = new components.container({
                    container: '#' + id + ' .wrapper.page.child .box.content .panel-scroll-item',
                    textTemplate: cadenaformfix01
                });
                form.initevent = function (options) {
                    console.log("estoy dentro de form fix");
                    var scroll = new controls.UXPanelScroll({
                        id: id,
                        item: ".group .input"
                    });
                };
            });
        }
    }]);

    return mypageform01;
}()) || _class);