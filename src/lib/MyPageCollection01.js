'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mypagecollection01 = undefined;

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

var pageindex = 0;
var pagerow = 5;
var datos = {
    grupos: [{ codgrupo: 1, description: "Bebida" }, { codgrupo: 2, description: "Pan" }, { codgrupo: 3, description: "Carne" }, { codgrupo: 4, description: "Pescado" }, { codgrupo: 5, description: "Botes" }, { codgrupo: 6, description: "Vinos" }, { codgrupo: 7, description: "Refrescos" }, { codgrupo: 8, description: "Bolleria" }, { codgrupo: 9, description: "Dulces" }, { codgrupo: 10, description: "Frutas" }, { codgrupo: 11, description: "Bizcochos" }, { codgrupo: 12, description: "Pucheros" }, { codgrupo: 13, description: "Tortas" }, { codgrupo: 14, description: "Grano" }, { codgrupo: 15, description: "Pastas" }, { codgrupo: 16, description: "Ensaladas" }, { codgrupo: 17, description: "Pizzas" }, { codgrupo: 18, description: "Horno" }, { codgrupo: 19, description: "Cervezas" }, { codgrupo: 20, description: "Rebozados" }, { codgrupo: 21, description: "Frituras" }, { codgrupo: 22, description: "Yogures" }, { codgrupo: 23, description: "Helados" }, { codgrupo: 24, description: "Licores" }, { codgrupo: 25, description: "Copas" }, { codgrupo: 26, description: "Cafes" }, { codgrupo: 27, description: "Poleos" }, { codgrupo: 28, description: "Hamburguesas" }, { codgrupo: 29, description: "Chips" }]
};
var datospagina = Enumerable.from(datos.grupos)
//.take(index*pagerow)
.skip(pageindex * pagerow).take(pagerow).select("$").toArray();

var cadenapagestring = '\n<div  class="wrapper page child" >\n    <div class="nav" data-bind-html="content:onLoadContent">\n        <nav  >\n           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >\n             <span class="fa fa-chevron-left" ></span>\n             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>\n           </button>\n        </nav>\n    </div>  \n    <div class="main" >\n       <main>\n          <div class="box content"  >\n                \n          </div>\n       </main>\n    </div>\n    <div class="footer">\n        <footer  data-bind-html=\'property:textTemplate\'>\n            <!--\n            <my-panel-scroll-popup id=\'popup01\'></my-panel-scroll-popup>\n            -->\n\n        </footer>\n    </div>\n';
var cadenapanelscroll01 = '\n<div class="panel-scroll-01" >\n  <div class="panel-scroll-content" >\n   <div class="panel-scroll-item" >\n\n   </div>\n  </div>\n  <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>\n  <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>\n</div>\n';

var cadenalistcollection01 = '\n<ul class="list-collection "  >\n{{#each grupos}}\n     <li>\n\n        <div class="el-left" >\n        <!--<img src="src/img/64.svg" >-->\n        </div>\n            <div class="el-content" >\n\n              <h2>{{description}}</h2>\n              \n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quidem facilis nisi soluta dicta, asperiores, fugiat enim ab adipisci doloribus quaerat at saepe suscipit labore. Sit ipsa esse illo reprehenderit?</p>\n                       \n            </div>\n            <a class="list-element el-right ripple" href="#" >\n                <span class="fa fa-chevron-right center" ></span>\n            </a>\n     </li>\n{{/each}}\n</ul>\n';
var datosindexpagina = { grupos: datospagina };
var $template = void 0;
var $buttonBack = void 0;
var mypagecollection01 = exports.mypagecollection01 = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-page-collection-01',
    textTemplate: cadenapagestring
}), _dec(_class = function () {
    function mypagecollection01() {
        _classCallCheck(this, mypagecollection01);
    }

    _createClass(mypagecollection01, [{
        key: 'initevent',
        value: function initevent(options, id) {
            var self = this;
            console.log("estoy en mypagecollection01");
            console.log(id);
            $template = $('#' + id + '.wrapper.page.child');
            $buttonBack = $('#' + id + ' ' + '#btn-toggle-back-3');
            //console.dir($buttonBack)
            $buttonBack.on("click", function (e) {
                console.log("estoy dentro de click en mybuttoncollection01");
                self.changeAnimation(true, id);
            });
        }
    }, {
        key: 'changeAnimation',
        value: function changeAnimation(remove, id) {
            console.log("estoy dentro de changeAnimation en mypagecollection01");
            //console.dir($template)
            $template = $('#' + id + '.wrapper.page.child');
            var reftemplate = '#' + id + '.wrapper.page.child';
            if ($template.length == 0) {
                $template = $('#' + id + ' .wrapper.page.child');
                reftemplate = '#' + id + ' .wrapper.page.child';
            }
            if ($template.hasClass("animation")) {
                $template.removeClass("animation");
                if (remove) {
                    var timer = setTimeout(function () {
                        //removeContainer('#'+id+'.wrapper.page.child')
                        (0, _utilContainer.removeContainer)(reftemplate);

                        clearTimeout(timer);
                    }, 400);
                }
            } else {
                $template.addClass("animation");
            }
        }
    }]);

    return mypagecollection01;
}()) || _class);