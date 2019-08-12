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

var cadenabusquedastring = '\n<div class="group group-block">\n    <div class="label-input">\n    <span class="logo fa fa-tag fa-2x"></span>\n    <input type="text" autocomplete="off" id="busquedatxt" placeholder="Busqueda" class="input medium">\n    <button type="button" id="search" class="list-button"><span class="fa fa-search"></span></button>\n    </div>\n</div>\n';

var mysearch = exports.mysearch = (_dec = (0, _componentDecorator.Component)({
    selector: 'my-search',
    textTemplate: cadenabusquedastring,
    cssUrls: ['bower/tether/dist/css/tether.css', 'src/components/panel/04PanelScroll01.css', 'src/components/list/03datalist01.css'],
    importsUrl: ['bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDataList.js', typemodule: 'module' }, { url: 'src/componentsImports/UXButtonScroll.js', typemodule: 'module' }, 'bower/linqjs/linq.js']
}), _dec(_class = function () {
    function mysearch() {
        _classCallCheck(this, mysearch);
    }

    _createClass(mysearch, [{
        key: 'initevent',
        value: function initevent(options, id) {
            console.log('estoy en mysearch con id:' + id);
            //console.dir(Enumerable)

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