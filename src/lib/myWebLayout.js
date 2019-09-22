'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.weblayout = undefined;

var _dec, _class;

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenaweblatoutsstring = '\n<header>\n    <div class="logo">\n        <div class="spinner">\n            <div class="ball ball-1"></div>\n            <div class="ball ball-2"></div>\n            <div class="ball ball-3"></div>\n            <div class="ball ball-4"></div>\n        </div>\n    </div>\n    <h1 class="title-application">My Application</h1>\n</header>\n\n\n\n\n<div class="main-body">\n    <aside id="menuvertical" class="menu-area">\n        <my-menu-vertical-01 id="menu-vertical02"></my-menu-vertical-01>\n    </aside>\n    <div id="root" class="wrapper page root">\n\n        <div class="nav">\n            \n            <nav data-behavior="navButtons03layout02">\n                <my-nav></my-nav>\n                <my-menu-horizontal-01></my-menu-horizontal-01>\n\n            </nav>\n            \n        </div>\n\n        <div class="main">\n            <main>\n                <div class="content" data-template="scroll02" data-action="panelform01" >\n                 <my-scroll></my-scroll>\n                 <!--\n                    <div class="panel-scroll-01">\n                        <div class="panel-scroll-content">\n                            <div class="panel-scroll-item">\n                              \n                            </div>\n                        </div>\n                        <button id="btn-slide-up" class="slide-button-panel top"><i class="fa fa-chevron-up fa-2x"></i></button>\n                        <button id="btn-slide-down" class="slide-button-panel bottom"><i class="fa fa-chevron-down fa-2x"></i></button>\n                    </div>\n                   -->\n\n                </div>\n            </main>\n        </div>\n\n        <div class="footer">\n            <footer>\n              <!--  \n              <div class="push-center-inner push-center-3x">\n                 <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">\n                  <span class="fa fa-check-circle fa-2x" ></span>\n                  <span class="title" >Aceptar</span>\n                 </button>\n\n                 <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">\n                  <span class="fa fa-times-circle fa-2x" ></span>\n                  <span class="title" >Cancelar</span>\n                 </button>\n              </div>\n              -->\n            </footer>\n        </div>\n\n    </div>\n\n</div>\n';

var weblayout = exports.weblayout = (_dec = (0, _componentDecorator.Component)({
    //container:".container .pages",
    selector: 'my-layout',
    textTemplate: cadenaweblatoutsstring,
    cssUrls: ['src/components/layouts/03layout02/03layout02.css', 'src/components/layouts/03layout02/03transition02.css', 'src/components/effects/03rippleEffects01.css'],
    importsUrl: ["bower/mousetrap/mousetrap.min.js", "node_modules/inputmask/dist/inputmask/inputmask.js", "bower/hammerjs/hammer.min.js", "src/shared/js/behaviors03layout02.js"]
}), _dec(_class = function weblayout() {
    _classCallCheck(this, weblayout);
}) || _class);