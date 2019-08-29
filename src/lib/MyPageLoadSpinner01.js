'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mypageloadspinner = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _utilContainer = require('src/componentsImports/utilContainer.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenapagestring = '\n<div  class="wrapper page child" >\n    <div class="nav" >\n        <nav  >\n           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >\n             <span class="fa fa-chevron-left" ></span>\n             <span class="texto-btn"  > Back</span>\n           </button>\n        </nav>\n    </div>  \n    <div class="main" >\n       <main>\n          <div class="box content"  >\n            <div id="loader02" class="loader-progress-01 splash-panel" >\n             <div class="loading">\n                <div class="icon-loader sk-fading-circle">\n                    <div class="sk-circle1 sk-circle"></div>\n                    <div class="sk-circle2 sk-circle"></div>\n                    <div class="sk-circle3 sk-circle"></div>\n                    <div class="sk-circle4 sk-circle"></div>\n                    <div class="sk-circle5 sk-circle"></div>\n                    <div class="sk-circle6 sk-circle"></div>\n                    <div class="sk-circle7 sk-circle"></div>\n                    <div class="sk-circle8 sk-circle"></div>\n                    <div class="sk-circle9 sk-circle"></div>\n                    <div class="sk-circle10 sk-circle"></div>\n                    <div class="sk-circle11 sk-circle"></div>\n                    <div class="sk-circle12 sk-circle"></div>\n                </div>\n             </div>\n            </div>\n          </div>\n       </main>\n    </div>\n    <div class="footer">\n        <footer  >\n        <div class="push-center-inner push-center-inline-3x">\n            <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">\n            <span class="fa fa-check-circle fa-2x" ></span>\n            <span class="title" >Aceptar</span>\n            </button>\n        \n            <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">\n            <span class="fa fa-times-circle fa-2x" ></span>\n            <span class="title" >Cancelar</span>\n            </button>\n          \n    </div>\n    <my-panel-scroll-popup id=\'popup02\'></my-panel-scroll-popup>       \n            \n\n        </footer>\n    </div>\n';

var cadenaspinnerstring01 = '\n    <div class="lds-spinner">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    </div>\n';

var cadenaspinnerstring02 = '\n    <div class="lds-roller">\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    <div></div>\n    </div>\n';
var cadenaspinnerstring03 = '\n<div class="icon-loader sk-fading-circle">\n    <div class="sk-circle1 sk-circle"></div>\n    <div class="sk-circle2 sk-circle"></div>\n    <div class="sk-circle3 sk-circle"></div>\n    <div class="sk-circle4 sk-circle"></div>\n    <div class="sk-circle5 sk-circle"></div>\n    <div class="sk-circle6 sk-circle"></div>\n    <div class="sk-circle7 sk-circle"></div>\n    <div class="sk-circle8 sk-circle"></div>\n    <div class="sk-circle9 sk-circle"></div>\n    <div class="sk-circle10 sk-circle"></div>\n    <div class="sk-circle11 sk-circle"></div>\n    <div class="sk-circle12 sk-circle"></div>\n</div>\n';
var mypageloadspinner = exports.mypageloadspinner = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-page-load-spinner-01',
    textTemplate: cadenapagestring,
    cssUrls: ['src/components/loaders/loaders02/04loader-progress-01.css', 'src/components/loaders/loaders01/04logospinners.css', 'src/components/loaders/loaders03/spinner.css', 'src/components/loaders/loaders04/spinner.css', 'src/components/loaders/loaders05/spinner.css']
}), _dec(_class = function () {
    function mypageloadspinner() {
        _classCallCheck(this, mypageloadspinner);
    }

    _createClass(mypageloadspinner, [{
        key: 'initevent',
        value: function initevent(options, id) {}
    }]);

    return mypageloadspinner;
}()) || _class);