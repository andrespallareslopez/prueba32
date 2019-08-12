'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mycombo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;
//import {UXDataList} from 'src/componentsImports/UXDataList.js'

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _inputcombo = require('src/shared/templ/inputcombo01.html!text');

var _inputcombo2 = _interopRequireDefault(_inputcombo);

var _datalistmesas = require('src/shared/templ/datalistmesas.html!text');

var _datalistmesas2 = _interopRequireDefault(_datalistmesas);

var _datalistarticulos = require('src/shared/templ/datalistarticulos.html!text');

var _datalistarticulos2 = _interopRequireDefault(_datalistarticulos);

var _listInMemory = require('src/shared/js/listInMemory.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var cadenadatamesasstring = '\n<div class="panel-scroll" >\n    <div class="panel-scroll-content" >\n      <div class="panel-scroll-item" >\n        <div class="datalist-container" >\n          {{#each mesas}}\n          <div class="element-link el ripple" >{{descripcion}}</div>\n          {{/each}}\n        </div>\n      </div>\n\n     </div>\n     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>\n     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>\n </div>\n';
var cadenadataarticulosstring = '\n<div class="panel-scroll" >\n    <div class="panel-scroll-content" >\n      <div class="panel-scroll-item" >\n        <div class="datalist-container" >\n          {{#each articulos}}\n          <div class="element-link el ripple" >{{descripcion}}</div>\n          {{/each}}\n        </div>\n      </div>\n\n     </div>\n     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>\n     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>\n </div>\n';
var cadenacombostring = '\n<div id="datalist01" class="datalist" >\n  <button id="btn-slide-close01" class="slide-button-panel button-close top-off" >\n    <i class="fa fa-close fa-1x"></i>\n  </button>\n  <div class="panel-datalist" >\n    \n  </div>\n</div>\n<div class="group group-block">\n  <div class="label-help">\n    <span class="logo fa fa-question-circle fa-2x"></span>\n    <span class="text">Introduce grupo </span>\n  </div>\n  <div class="label-input">\n    <span class="logo fa fa-tag fa-2x"></span>\n    <input id="combotxt" type="text" placeholder="" class="input medium">\n    <button id="search" class="list-button"><span class="fa fa-sort-desc"></span></button>\n  </div>\n</div>\n';

var mycombo = exports.mycombo = (_dec = (0, _componentDecorator.Component)({
  selector: 'my-combo',
  textTemplate: cadenacombostring,
  cssUrls: ['bower/tether/dist/css/tether.css', 'src/components/panel/04PanelScroll01.css', 'src/components/list/03datalist01.css'],
  importsUrl: ['bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDataList.js', typemodule: 'module' }, { url: 'src/componentsImports/UXButtonScroll.js', typemodule: 'module' }]
}), _dec(_class = function () {
  function mycombo() {
    _classCallCheck(this, mycombo);
  }

  _createClass(mycombo, [{
    key: 'initevent',
    value: function initevent(options, id) {
      var scroll;
      var datalist;
      //console.log(id);
      datalist = new controls.UXDataList({
        id: id,
        clearContainer: true,
        /*
        data:(function(id){
         if (id=="combo01")    
          return   {articulos:articulos}
         else if(id=="combo02")
           return {mesas:mesas}
        })(id),
        */
        /*
        textTemplate:(function(id){
           if (id=="combo01")
             return cadenadataarticulos
           else if (id=="combo02")
             return cadenadatamesas
        })(id),
        */
        onButtonClick: function onButtonClick(options) {
          if (id == "combo01") datalist.setData({ articulos: _listInMemory.articulos }, id, _datalistarticulos2.default);else if (id == "combo02") datalist.setData({ mesas: _listInMemory.mesas }, id, _datalistmesas2.default);

          scroll = new controls.UXButtonScroll({
            id: id + 'datalist',
            onItemClick: function onItemClick(value, target) {
              console.dir(target);
              //console.log("estoy dentro de onItemClick")
              datalist.$inputText.val(value);
              datalist.toggle();
              scroll.destroy();
            }
          });
        },
        onClose: function onClose() {
          scroll.destroy();
        }
      });
    }
  }]);

  return mycombo;
}()) || _class);