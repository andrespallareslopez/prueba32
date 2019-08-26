'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mybuttonsearch = undefined;

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

var datos = {
  grupos: [{ codgrupo: 1, description: "Bebida" }, { codgrupo: 2, description: "Pan" }, { codgrupo: 3, description: "Carne" }, { codgrupo: 4, description: "Pescado" }, { codgrupo: 5, description: "Botes" }, { codgrupo: 6, description: "Vinos" }, { codgrupo: 7, description: "Refrescos" }, { codgrupo: 8, description: "Bolleria" }, { codgrupo: 9, description: "Dulces" }, { codgrupo: 10, description: "Frutas" }, { codgrupo: 11, description: "Bizcochos" }, { codgrupo: 12, description: "Pucheros" }, { codgrupo: 13, description: "Tortas" }, { codgrupo: 14, description: "Grano" }, { codgrupo: 15, description: "Pastas" }, { codgrupo: 16, description: "Ensaladas" }, { codgrupo: 17, description: "Pizzas" }, { codgrupo: 18, description: "Horno" }, { codgrupo: 19, description: "Cervezas" }, { codgrupo: 20, description: "Rebozados" }, { codgrupo: 21, description: "Frituras" }, { codgrupo: 22, description: "Yogures" }, { codgrupo: 23, description: "Helados" }, { codgrupo: 24, description: "Licores" }, { codgrupo: 25, description: "Copas" }, { codgrupo: 26, description: "Cafes" }, { codgrupo: 27, description: "Poleos" }, { codgrupo: 28, description: "Hamburguesas" }, { codgrupo: 29, description: "Chips" }]
};

var cadenabuttonsearchstring = '\n<form class="form-search push-float-right" >\n  <button id="btn-form-search" class="nav-mobile nav-mobile-search btn-search ripple" >\n    <span class="fa fa-search fa-2x" ></span>\n  </button>\n  <input id="input-search" placeholder="Search..." class="input-search" type="text" />\n  <span class="btn-spin-progress fa fa-circle-o-notch fa-spin fa-18x fa-fw"></span>\n  <button id="btn-form-close" class="nav-mobile nav-mobile-search btn-search btn-search-close" >\n \n    <span class="fa fa-times fa-2x" ></span>\n  </button>\n</form>\n';

var cadenapanelscroll01 = '\n<div class="panel-scroll-01" >\n  <div class="panel-scroll-content" >\n   <div class="panel-scroll-item" >\n\n   </div>\n  </div>\n  <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>\n  <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>\n</div>\n';

var cadenalistcollection01 = '\n<ul class="list-collection "  >\n{{#each grupos}}\n     <li>\n\n        <div class="el-left" >\n        <!--<img src="src/img/64.svg" >-->\n        </div>\n            <div class="el-content" >\n\n              <h2>{{description}}</h2>\n              \n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quidem facilis nisi soluta dicta, asperiores, fugiat enim ab adipisci doloribus quaerat at saepe suscipit labore. Sit ipsa esse illo reprehenderit?</p>\n                       \n            </div>\n            <a class="list-element el-right ripple" href="#" >\n                <span class="fa fa-chevron-right center" ></span>\n            </a>\n     </li>\n{{/each}}\n</ul>\n';

var mybuttonsearch = exports.mybuttonsearch = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-button-search',
  textTemplate: cadenabuttonsearchstring,
  cssUrls: ['src/components/search/03search.css'],
  importsUrl: [{ url: 'src/componentsImports/UXSearchPanel.js', typemodule: 'module' }]
}), _dec(_class = function () {
  function mybuttonsearch() {
    _classCallCheck(this, mybuttonsearch);
  }

  _createClass(mybuttonsearch, [{
    key: 'initevent',
    value: function initevent(options, id) {
      //console.dir(options)
      console.log('Estoy en control my-button-search con id ' + id);
      $("#" + id + " " + "#btn-form-search").on("click", function (evt) {
        evt.preventDefault();
        $("#" + id + " .form-search").toggleClass("open-search");
      });
      $("#" + id + " " + "#btn-form-close").on("click", function (evt) {
        evt.preventDefault();
        $("#" + id + " " + " .form-search").toggleClass("open-search");
      });
      var searchinput = new controls.UXSearchPanel({
        id: id,
        onSearchBefore: function onSearchBefore(data, value, id) {
          if (id == "buttonsearch02") {
            $("#" + id).addClass("open-progress");
          }
        },
        onSearch: function onSearch(data, value, id) {
          console.log(value);

          if (id == "buttonsearch02") {
            $("#" + id).removeClass("open-progress");
            var idtemp = 'template08';
            //var $buttonsearch02 = $("#template08 .box.content .panel-scroll-item")
            //console.dir($buttonsearch02)
            var datossearch02 = Enumerable.from(datos.grupos).where(function (grupo) {
              return grupo.description.toLowerCase().includes(value) == true;
            }).select("$").toArray();
            console.dir(datossearch02);

            //$buttonsearch02.setData({grupos:datossearch02},id,)

            (0, _utilContainer.removeContainer)('#' + idtemp + ' .wrapper.page.child .box.content .panel-scroll-item .list-collection');

            var list = new components.container({
              container: '#' + idtemp + ' .wrapper.page.child .box.content .panel-scroll-item',
              data: { grupos: datossearch02 },
              textTemplate: cadenalistcollection01
            });
            list.initevent = function (options) {
              console.log("estoy dentro de colledion list");
              var scroll = new controls.UXPanelScroll({
                id: idtemp,
                item: ".list-collection li"
              });
            };
          } //end of if (id=='buttonsearch02')

          //Ejemplos
          //self.setData(datoscombo,self.options.id,self.options.textTemplate)
          //var $listMesas=$("#list-panel-mesas")[0]
          //console.dir($listMesas.setData)
          //$listMesas.setData(mesas,'list-panel-mesas')
          //#template08.panel-scroll-item
        }
      });
    }
  }]);

  return mybuttonsearch;
}()) || _class);