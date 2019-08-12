'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mysearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _listInMemory = require('src/shared/js/listInMemory.js');

var _inputbusqueda = require('src/shared/templ/inputbusqueda01.html!text');

var _inputbusqueda2 = _interopRequireDefault(_inputbusqueda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var datos = {
    grupos: [{ codgrupo: 1, description: "Bebida" }, { codgrupo: 2, description: "Pan" }, { codgrupo: 3, description: "Carne" }, { codgrupo: 4, description: "Pescado" }, { codgrupo: 5, description: "Botes" }, { codgrupo: 6, description: "Vinos" }, { codgrupo: 7, description: "Refrescos" }, { codgrupo: 8, description: "Bolleria" }, { codgrupo: 9, description: "Dulces" }, { codgrupo: 10, description: "Frutas" }, { codgrupo: 11, description: "Bizcochos" }, { codgrupo: 12, description: "Pucheros" }, { codgrupo: 13, description: "Tortas" }, { codgrupo: 14, description: "Grano" }, { codgrupo: 15, description: "Pastas" }, { codgrupo: 16, description: "Ensaladas" }, { codgrupo: 17, description: "Pizzas" }, { codgrupo: 18, description: "Horno" }, { codgrupo: 19, description: "Cervezas" }, { codgrupo: 20, description: "Rebozados" }, { codgrupo: 21, description: "Frituras" }, { codgrupo: 22, description: "Yogures" }, { codgrupo: 23, description: "Helados" }, { codgrupo: 24, description: "Licores" }, { codgrupo: 25, description: "Copas" }, { codgrupo: 26, description: "Cafes" }, { codgrupo: 27, description: "Poleos" }, { codgrupo: 28, description: "Hamburguesas" }, { codgrupo: 29, description: "Chips" }]
};

var cadenadatagruposstring = '\n<div class="panel-scroll" >\n    <div class="panel-scroll-content" >\n      <div class="panel-scroll-item" >\n        <div class="datalist-container" >\n          {{#each grupos}}\n          <div class="element-link el ripple" >{{description}}</div>\n          {{/each}}\n        </div>\n      </div>\n\n     </div>\n     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>\n     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>\n </div>\n';

var cadenabusquedastring = '\n<div id="datalist01" class="datalist" >\n  <button id="btn-slide-close01" class="slide-button-panel button-close top-off" >\n    <i class="fa fa-close fa-1x"></i>\n  </button>\n  <div class="panel-datalist" >\n    \n  </div>\n</div>\n<div class="group group-block">\n    <div class="label-input">\n    <span class="logo fa fa-tag fa-2x"></span>\n    <input type="text" autocomplete="off" id="busquedatxt" placeholder="Busqueda" class="input medium">\n    <button  id="search" class="list-button"><span class="fa fa-search" ></span></button>\n    </div>\n</div>\n';

var mysearch = exports.mysearch = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-search',
    textTemplate: cadenabusquedastring,
    cssUrls: ['bower/tether/dist/css/tether.css', 'src/components/panel/04PanelScroll01.css', 'src/components/list/03datalist01.css'],
    importsUrl: ['bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDataList.js', typemodule: 'module' }, { url: 'src/componentsImports/UXButtonScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXSearchList.js', typemodule: 'module' }, 'bower/linqjs/linq.js']
}), _dec(_class = function () {
    function mysearch() {
        _classCallCheck(this, mysearch);
    }

    _createClass(mysearch, [{
        key: 'initevent',
        value: function initevent(options, id) {
            console.log('estoy en mysearch con id:' + id);
            //console.dir(Enumerable)
            var scroll;
            var datalist;
            datalist = new controls.UXSearchList({
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
                    console.log('estoy en onbuttonclick search01');
                    if (id == "search01") {
                        console.log('estoy en onbuttonclick search01');
                        datalist.setData(datos, id, cadenadatagruposstring);
                    } else if (id == "search02") datalist.setData({ mesas: _listInMemory.mesas }, id, cadenadatamesas);

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

    return mysearch;
}()) || _class);

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
/*
 $("#input-search").on("keydown",function(e){
          if ( !$(".form-search").hasClass("open-progress")){
             $(".form-search").addClass("open-progress"); 
          }  
        });
        $("#input-search").on("keyup", debounce(function (e) {
          //console.dir(e);
          //console.dir($("#input-search").val());
          values.router.setRoute("/grupos/grupobySearch/"+$("#input-search").val());
          $(".form-search").removeClass("open-progress");
          
        },300));
*/
/*
    var onLoadProductsSlider=function(path){
          p1=util.http.get(values.host+path);
          
           p1.then(function(result){
               //resultdata=result;
              $(".wrapper.root .content .slide-container .slide-items").empty();
              //$(".wrapper.root .content .slide-container .slide-items ul").remove();  
              //behaviors.destroyEventsSlidePanel({});
              //console.dir(result);
              if (slidesp){
                console.log("objecto slide ya creado");
               // console.dir(slidesp.options.fncreate);
                slidesp.render(result,"reload"); 
              }else{
                slidesp=new components.slidePanels({
                 container:".wrapper.root .content .slide-container .slide-items",
                 data:result,
                 nametemplate:"slide03"
                });
              }  
           });
    }
*/