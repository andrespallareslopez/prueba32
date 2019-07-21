'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lite = require('node_modules/webcomponentsjs/lite.js');

var _lite2 = _interopRequireDefault(_lite);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _util = require('util01');

var _component = require('component');

var _scroll = require('src/shared/templ/scroll01.html!text');

var _scroll2 = _interopRequireDefault(_scroll);

var _scroll3 = require('src/shared/templ/scroll02.html!text');

var _scroll4 = _interopRequireDefault(_scroll3);

var _scroll5 = require('src/shared/templ/scroll03.html!text');

var _scroll6 = _interopRequireDefault(_scroll5);

var _scroll7 = require('src/shared/templ/scroll04.html!text');

var _scroll8 = _interopRequireDefault(_scroll7);

var _scroll9 = require('src/shared/templ/scroll05.html!text');

var _scroll10 = _interopRequireDefault(_scroll9);

var _myform = require('src/shared/templ/myform01.html!text');

var _myform2 = _interopRequireDefault(_myform);

var _input = require('src/shared/templ/input01.html!text');

var _input2 = _interopRequireDefault(_input);

var _inputcalendar = require('src/shared/templ/inputcalendar01.html!text');

var _inputcalendar2 = _interopRequireDefault(_inputcalendar);

var _inputbusqueda = require('src/shared/templ/inputbusqueda01.html!text');

var _inputbusqueda2 = _interopRequireDefault(_inputbusqueda);

var _inputcombo = require('src/shared/templ/inputcombo01.html!text');

var _inputcombo2 = _interopRequireDefault(_inputcombo);

var _nav = require('src/shared/templ/nav01.html!text');

var _nav2 = _interopRequireDefault(_nav);

var _slide = require('src/components/slides/slide01.html!text');

var _slide2 = _interopRequireDefault(_slide);

var _slide04perspective = require('src/components/slides/slide04perspective.html!text');

var _slide04perspective2 = _interopRequireDefault(_slide04perspective);

var _slide3 = require('src/components/slides/slide03.html!text');

var _slide4 = _interopRequireDefault(_slide3);

var _Tabs = require('src/shared/templ/Tabs01.html!text');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _datalist = require('src/shared/templ/datalist02.html!text');

var _datalist2 = _interopRequireDefault(_datalist);

var _datalistmesas = require('src/shared/templ/datalistmesas.html!text');

var _datalistmesas2 = _interopRequireDefault(_datalistmesas);

var _datalistarticulos = require('src/shared/templ/datalistarticulos.html!text');

var _datalistarticulos2 = _interopRequireDefault(_datalistarticulos);

var _tmplverticalmenu = require('src/components/menu-vertical/tmplverticalmenu01.html!text');

var _tmplverticalmenu2 = _interopRequireDefault(_tmplverticalmenu);

var _templatepanelactions = require('src/components/panel/templatepanelactions.html!text');

var _templatepanelactions2 = _interopRequireDefault(_templatepanelactions);

var _templatepanelscroll = require('src/components/panel/templatepanelscroll.html!text');

var _templatepanelscroll2 = _interopRequireDefault(_templatepanelscroll);

var _templatepanelscrollbind = require('src/components/panel/templatepanelscrollbind.html!text');

var _templatepanelscrollbind2 = _interopRequireDefault(_templatepanelscrollbind);

var _listInMemory = require('src/shared/js/listInMemory.js');

var _componentDecorator = require('src/componentsImports/componentDecorator.js');

var _utilContainer = require('src/componentsImports/utilContainer.js');

var _myNav = require('src/lib/myNav.js');

var _myCalendar = require('src/lib/myCalendar.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import 'src/components/layouts/03layout02/03layout02.css'

//import 'src/components/menu-horizontal/03menu-horizontal01.css'

//import 'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css'

//import 'src/components/panel/04PanelScroll02.css'

/*
$(document).ready(function(){
   
})
*/

/**
 * JavaScript Decorators: What They Are and When to Use Them
 * https://www.sitepoint.com/javascript-decorators-what-they-are/
 * 
 * 
 * Exploring EcmaScript Decorators
 * https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
 * 
 * 
 */


//import {keyform} from 'keyform'

/// <reference path="./main.d.ts" />
//importar una libreria polyfill para webcomponentes por si no esta.
//import React from '../../../node_modules/react/umd/react.production.min.js'
//import ReactDOM from '../../../node_modules/react-dom/umd/react-dom.production.min.js'
(0, _jquery2.default)(function () {
    //console.log("estoy dentro del ready")
    /*
    const autorize=function(target,name,descriptor){
       console.dir(descriptor);
       const value=descriptor.value;
       descriptor.value=function(){
           console.log("estoy en descriptor");
           //value="autorize"
           return value.apply(this,arguments);
           
       }
       return descriptor
    };
        class Controller {
       constructor(){
         console.log("estoy en constructor")
       }
       @autorize
       action01(){
          console.log("estoy en action01")
          return "ok";
       }
       @autorize
       action02(){
          console.log("estoy en action02")
       }
    }; 
       
    const controller=new Controller();
        controller.action01();
    coneotroller.action02();
    */
    window.controls = {};
    /*
    const Component=function(options){
        
        return function(target){
            //console.log("estoy dentro de target");
            //console.dir(target);
            //components.container.prototype=target
            //var container=new components.container(options);
            //container.prototype=target
            //target.prototype=new components.container()
           
            var targetInstance=new target();
            
            var container=new components.container();
            util.extend(container,targetInstance);
            //console.dir(targetInstance) 
            targetInstance.init(options)
            if ('initevent' in targetInstance){
                //console.log("estoy dentro de target initevent")
                //container.prototype.initevent=targetInstance.initevent
            }
            
            //console.dir(targetInstance)
            //targetInstance.prototype=new components.container()
            //var component=new targetInstance(options)
            //target.prototype=new components.container()
            //var targetInstance=new target(options);
            //console.dir(window)
           
            
            //if ('initevent' in targetInstance)
            //   targetInstance.initevent(options);
            
        }
    } 
    */
    /*
    var appendToContainer=function(html,containerview){
       
        console.log("estoy dentro de appendToContainer");
        console.log(containerview)
        
        
        $(html).appendTo(containerview);
        
    };
    */
    /*
        removeContainer(self.options.containerView); 
        appendToContainer.apply(self,[html,self.options.containerView]); 
    */
    /*
    function recreateNode(el, withChildren) {
        if (withChildren) {
          el.parentNode.replaceChild(el.cloneNode(true), el);
        } else {
          var newEl = el.cloneNode(false);
          while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
          el.parentNode.replaceChild(newEl, el);
        }
    };
    */
    /*
    var removeContainer=function(containerview){
        var self=this;
        console.log("estoy dentro de removeContainer");
        console.log(containerview)
           //Tratar de borrar elementos de esta manera y sus eventos
        recreateNode(document.querySelector(containerview),true);     
        
        //limpiar el area antes de inyectar el codigo html
        $(containerview).empty();
        $(containerview).remove();
         
    };
    */
    if ((0, _jquery2.default)(".container .pages").data("template")) {
        var DrawPanelReactDetail = function DrawPanelReactDetail(nameDescription, self, datos, id) {
            var slidePanelDetailReact = function slidePanelDetailReact(self, nameDescripcion) {
                //console.log(nameDescripcion)
                return _react2.default.createElement(
                    'ul',
                    { className: 'slide-container-items' },
                    self.sizes.pages.map(function (page, index) {
                        return _react2.default.createElement(
                            'li',
                            { className: 'slide-item', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'list-grp-buttons list-center' },
                                page.slides.map(function (slide, index) {
                                    //console.dir(slide);
                                    return _react2.default.createElement(
                                        'a',
                                        { className: 'list-grp-button box-shadow-3', key: index, 'data-codigo': slide.codigo, href: '#' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'list-grp-content-top' },
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'list-grp-content-text list-grp-context-text-center' },
                                                slide[nameDescripcion]
                                            )
                                        )
                                    );
                                })
                            )
                        );
                    })
                );
            };

            var myslidePanelDetail = new controls.slidePanels({
                container: ".slide-container .slide-items",
                ReactDOM: _reactDom2.default,
                nameDescription: nameDescription,
                data: datos,
                templateReact: slidePanelDetailReact
                //textTemplate:cadenaSlidePanelDetail
            });
            //no podemos utilizar en el slidePaneld el initevent, ya 
            //se utiliza internamente, si lo ponemos sobreescribiremos
            //el que hay y el componente dejara de funcionar
            myslidePanelDetail.create(function (options) {
                var self = this;
                //console.log("estoy dentro de slide panel detail")
                //console.log(id)
                //en jquery hay que poner el # delante para detectar el id element
                (0, _jquery2.default)("#" + id + " a.list-grp-button").on("click", function (e) {
                    e.preventDefault();
                    //console.dir(this)
                    //console.dir(e.target)
                    console.log((0, _jquery2.default)(this).data("codigo"));
                    var codigo = (0, _jquery2.default)(this).data("codigo");
                    var url = 'http://185.194.60.156:8085/datasnap/rest/TServerMethods1/GetArticulos/' + codigo;

                    _jquery2.default.ajax({
                        url: url
                    }).done(function (result) {
                        //console.dir(result)
                        var result = JSON.parse(result);
                        var articulos = result.items;
                        console.dir(articulos);
                    }).fail(function (e) {
                        console.dir(e.error);
                    }).always(function () {});
                });
            });
        };

        /*
            var container = new components.container({
             container: '.container .pages',
             pathTemplate: 'src/shared/templ/',
             nametemplate: $('.container .pages').data('template')
            })
        */
        /*
        @Component({
           selector:'my-nav',
           textTemplate:cadenanav,
           cssUrls:['src/components/buttons/03buttonmovile01.css'],
           importsUrl:[ "src/shared/js/behaviors03layout02.js"]
        })
        class Nav {
            initevent(options){
                //console.dir(options)
                console.log("estoy en initevent en nav")
                //console.dir(window.behaviors)
                window.behaviors.navButtons03layout02()
            }
        }
        */
        /*
        var datos=
            [{codgrupo:1,description:"Bebida"},
                    {codgrupo:2,description:"Pan"},
                    {codgrupo:3,description:"Carne"},
                    {codgrupo:4,description:"Pescado"},
                    {codgrupo:5,description:"Botes"},
                    {codgrupo:6,description:"Vinos"},
                    {codgrupo:7,description:"Refrescos"},
                    {codgrupo:8,description:"Bolleria"},
                    {codgrupo:9,description:"Dulces"},
                    {codgrupo:10,description:"Frutas"},
                    {codgrupo:11,description:"Bizcochos"},
                    {codgrupo:12,description:"Pucheros"},
                    {codgrupo:13,description:"Tortas"},
                    {codgrupo:14,description:"Grano"},
                    {codgrupo:15,description:"Pastas"},
                    {codgrupo:16,description:"Ensaladas"},
                    {codgrupo:17,description:"Pizzas"},
                    {codgrupo:18,description:"Horno"},
                    {codgrupo:19,description:"Cervezas"},
                    {codgrupo:20,description:"Rebozados"},
                    {codgrupo:21,description:"Frituras"},
                    {codgrupo:22,description:"Yogures"},
                    {codgrupo:23,description:"Helados"},
                    {codgrupo:24,description:"Licores"},
                    {codgrupo:25,description:"Copas"},
                    {codgrupo:26,description:"Cafes"},
                    {codgrupo:27,description:"Poleos"},
                    {codgrupo:28,description:"Hamburguesas"},
                    {codgrupo:29,description:"Chips"}];
        var mesas=[
            {"codigo":"1","descripcion":"MESA 1","estaso":"-1"},
            {"codigo":"2","descripcion":"MESA 2","estaso":"-1"},
            {"codigo":"3","descripcion":"MESA 3","estaso":"-1"},
            {"codigo":"4","descripcion":"MESA 4","estaso":"-1"},
            {"codigo":"5","descripcion":"MESA 5","estaso":"-1"},
            {"codigo":"6","descripcion":"MESA 6","estaso":"-1"},
            {"codigo":"7","descripcion":"MESA 7","estaso":"-1"},
            {"codigo":"8","descripcion":"MESA 8","estaso":"-1"},
            {"codigo":"9","descripcion":"MESA 9","estaso":"-1"},
            {"codigo":"10","descripcion":"MESA 10","estaso":"-1"},
            {"codigo":"11","descripcion":"MESA 11","estaso":"-1"},
            {"codigo":"12","descripcion":"MESA 12","estaso":"-1"},
            {"codigo":"13","descripcion":"MESA 13","estaso":"-1"},
            {"codigo":"14","descripcion":"MESA 14","estaso":"-1"},
            {"codigo":"15","descripcion":"MESA 15","estaso":"-1"},
            {"codigo":"16","descripcion":"MESA 16","estaso":"-1"},
            {"codigo":"17","descripcion":"MESA 17","estaso":"-1"},
            {"codigo":"18","descripcion":"MESA 18","estaso":"-1"},
            {"codigo":"19","descripcion":"MESA 19","estaso":"-1"},
            {"codigo":"20","descripcion":"MESA 20","estaso":"-1"},
            {"codigo":"21","descripcion":"MESA 21","estaso":"-1"},
            {"codigo":"22","descripcion":"MESA 22","estaso":"-1"},
            {"codigo":"23","descripcion":"MESA 23","estaso":"-1"},
            {"codigo":"24","descripcion":"MESA 24","estaso":"-1"},
            {"codigo":"25","descripcion":"MESA 25","estaso":"0"},
            {"codigo":"26","descripcion":"MESA 26","estaso":"-1"},
            {"codigo":"27","descripcion":"MESA 27","estaso":"0"},
            {"codigo":"28","descripcion":"MESA 28","estaso":"-1"},
            {"codigo":"29","descripcion":"MESA 29","estaso":"-1"},
            {"codigo":"30","descripcion":"MESA 30","estaso":"-1"},
            {"codigo":"31","descripcion":"MESA 31","estaso":"0"},
            {"codigo":"32","descripcion":"MESA 32","estaso":"0"},
            {"codigo":"33","descripcion":"MESA 33","estaso":"0"},
            {"codigo":"34","descripcion":"MESA 34","estaso":"0"},
            {"codigo":"35","descripcion":"MESA 35","estaso":"-1"},
            {"codigo":"36","descripcion":"MESA 36","estaso":"0"},
            {"codigo":"37","descripcion":"MESA 37","estaso":"0"},
            {"codigo":"38","descripcion":"MESA 38","estaso":"0"},
            {"codigo":"39","descripcion":"MESA 39","estaso":"0"},
            {"codigo":"40","descripcion":"MESA 40","estaso":"0"},
            {"codigo":"41","descripcion":"MESA 41","estaso":"0"},
            {"codigo":"42","descripcion":"MESA 42","estaso":"0"},
            {"codigo":"43","descripcion":"MESA 43","estaso":"0"},
            {"codigo":"44","descripcion":"MESA 44","estaso":"-1"},
            {"codigo":"45","descripcion":"MESA 45","estaso":"-1"},
            {"codigo":"46","descripcion":"MESA 46","estaso":"0"},
            {"codigo":"47","descripcion":"MESA 47","estaso":"0"},
            {"codigo":"48","descripcion":"MESA 48","estaso":"0"},
            {"codigo":"49","descripcion":"MESA 49","estaso":"0"},
            {"codigo":"50","descripcion":"MESA 50","estaso":"0"}
        ]
        
        var categorias=[{"codigo":"02","categoria":"REFRESCOS","ingredientes":"S"},
        {"codigo":"03","categoria":"CERVEZAS","ingredientes":"N"},
        {"codigo":"04","categoria":"CAF\u00C9S","ingredientes":"N"},
        {"codigo":"06","categoria":"WHISKYS","ingredientes":"N"},
        {"codigo":"07","categoria":"BRANDYS","ingredientes":"N"},
        {"codigo":"08","categoria":"LICORES","ingredientes":"N"},
        {"codigo":"13","categoria":"ENSALADA","ingredientes":"S"},
        {"codigo":"15","categoria":"HAMBURGUESAS BOCATAS","ingredientes":"S"},
        {"codigo":"16","categoria":"MONTADITOS","ingredientes":"S"},
        {"codigo":"18","categoria":"CARNES","ingredientes":"S"},
        {"codigo":"20","categoria":"POSTRES","ingredientes":"S"},
        {"codigo":"22","categoria":"VINOS","ingredientes":"N"},
        {"codigo":"24","categoria":"VARIOS","ingredientes":"N"},
        {"codigo":"25","categoria":"CUBATA","ingredientes":"N"},
        {"codigo":"26","categoria":"TAPAS","ingredientes":"S"},
        {"codigo":"27","categoria":"MENU KIDS","ingredientes":"S"},
        {"codigo":"28","categoria":"PATATAS","ingredientes":"S"},
        {"codigo":"29","categoria":"TOSTADAS Y PANES","ingredientes":"S"},
        {"codigo":"30","categoria":"PESCADO","ingredientes":"S"},
        {"codigo":"31","categoria":"DEL MAR","ingredientes":"S"},
        {"codigo":"32","categoria":"ARROZ","ingredientes":"S"},
        {"codigo":"33","categoria":"ITALIANO","ingredientes":"S"},
        {"codigo":"34","categoria":"SOPAS","ingredientes":"S"}
        ]
        
        var articulos=[
            {"codigo":"2","descripcion":"COCA-COLA","categoria":"02"},
            {"codigo":"3","descripcion":"COCA-COLA LIGHT","categoria":"02"},
            {"codigo":"4","descripcion":"FANTA NARANJA","categoria":"02"},
            {"codigo":"5","descripcion":"FANTA LIM\u00D3N","categoria":"02"},
            {"codigo":"8","descripcion":"SPRITE","categoria":"02"},
            {"codigo":"9","descripcion":"TONICA","categoria":"02"},
            {"codigo":"10","descripcion":"BITTER KAS","categoria":"02"},
            {"codigo":"11","descripcion":"RED BULL","categoria":"02"},
            {"codigo":"12","descripcion":"AGUA PEQUE\u00D1A","categoria":"02"},
            {"codigo":"14","descripcion":"AGUA GRANDE","categoria":"02"},
            {"codigo":"17","descripcion":"ZUMO PI\u00D1A","categoria":"02"},
            {"codigo":"18","descripcion":"ZUMO MELOCOT\u00D3N","categoria":"02"},
            {"codigo":"19","descripcion":"AQUARIUS NARANJA","categoria":"02"},
            {"codigo":"20","descripcion":"AQUARIUS LIM\u00D3N","categoria":"02"},
            {"codigo":"21","descripcion":"NESTEA","categoria":"02"},
            {"codigo":"22","descripcion":"CASERA","categoria":"02"},
            {"codigo":"23","descripcion":"CHOLECK","categoria":"02"},
            {"codigo":"26","descripcion":"AGUA VICHY","categoria":"02"},
            {"codigo":"293","descripcion":"ZUMO NARANJA NATURAL","categoria":"02"}
        ]
        */
        var mymenuvertical01 = new _component.components.container({
            selector: 'my-menu-vertical-01',
            textTemplate: _tmplverticalmenu2.default,
            cssUrls: ['src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css', 'src/components/list/03List-collections.css'],
            importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXScrollV.js', typemodule: 'module' }, { url: 'src/componentsImports/UXAccordeon.js', typemodule: 'module' }, { url: 'src/componentsImports/bindOn.js', typemodule: 'module' }, { url: 'src/componentsImports/bindElement.js', typemodule: 'module' }, { url: 'src/componentsImports/bindComponent.js', typemodule: 'module' }]
        });
        mymenuvertical01.initevent = function (options, id) {
            /* 
            new controls.UXButtonScroll({
                id:id,
                containerComponent:".menu-vertical01",
                items:".items",
                scroll:".container-menu-scroll",
                item:".gr"
            })
            */
            /*
            new controls.UXScroll({
                id:id,
                containerComponent:".menu-vertical01",
                items:".items",
                scroll:".container-menu-scroll",
                item:".gr" 
            })
            */
            new controls.UXScrollV({
                id: id
            });
            new controls.UXAccordeon({
                id: id,
                onClickMenu: function onClickMenu(e) {
                    //console.dir(e)
                    console.log((0, _jquery2.default)(e.target).data("panel-id"));
                    console.log("estoy dentro de onclickmenu personalizada");
                    var id = (0, _jquery2.default)(e.target).data("panel-id");

                    var template = _templatepanelscrollbind2.default;
                    /*
                    var html=util.buildtemplate({
                        source:template,
                        data:{id:id},
                        typeInsertHTML:components.enumInsertHTML.customElement
                    })
                    */

                    //console.dir(html)

                    /*
                    removeContainer(self.options.containerView); 
                    */

                    //var $containerChild=$(".wrapper.page.child")
                    var containerView = ".main-body";
                    var $template = (0, _jquery2.default)('#' + id + '.wrapper.page.child');
                    var $buttonBack;

                    //console.dir($template)
                    if ($template.length == 0 && id) {

                        var panelControl = new _component.components.container({
                            container: containerView,
                            textTemplate: template,
                            data: { id: id }
                        });
                        panelControl.initevent = function (options) {
                            console.log('estoy dentro de initeent de panelControl');
                            var timer = setTimeout(function () {
                                changeAnimation();
                                clearTimeout(timer);
                            }, 350);

                            onClick();

                            function onClick() {
                                console.log("estoy en onClick");
                                $buttonBack = (0, _jquery2.default)('#' + id + ' ' + '#btn-toggle-back-3');
                                //console.dir($buttonBack)
                                $buttonBack.on("click", function (e) {
                                    console.log("estoy dentro de click");
                                    changeAnimation(true);
                                });
                            }
                            function changeAnimation(remove) {
                                console.log("estoy dentro de changeAnimation");
                                //console.dir($template)
                                $template = (0, _jquery2.default)('#' + id + '.wrapper.page.child');
                                if ($template.hasClass("animation")) {
                                    $template.removeClass("animation");
                                    if (remove) {
                                        var timer = setTimeout(function () {
                                            (0, _utilContainer.removeContainer)('#' + id + '.wrapper.page.child');
                                            clearTimeout(timer);
                                        }, 350);
                                    }
                                } else {
                                    $template.addClass("animation");
                                }
                            }

                            function onDestroy() {}
                        };

                        panelControl.bind = function (options) {
                            var self = this;
                            console.log("estoy en function bind");
                            console.dir(self);

                            var bind = new controls.BindComponent({
                                containerView: '#' + id,
                                target: self
                            });
                        };
                        panelControl.onClick = function (e) {
                            console.log("estoy dentro de panelControl Click");
                        };
                        /*
                        var templateChild=new components.container({
                           container:containerView
                        })
                        templateChild.promise.then(function(){
                            console.dir("estoy dentro de template child")
                            var timer=setTimeout(function(){
                              changeAnimation.apply(self,[])
                              clearTimeout(timer)
                            },350)
                            
                             
                            onClick()  
                        });
                        
                        appendToContainer.apply(self,[html,containerView]);
                        */
                    }
                    /*else{
                     changeAnimation.apply(self,[])
                     
                    }
                    */
                }
            });
        };
        /*
        var mycalendar=new components.container({
            selector:'my-calendar',
            textTemplate:cadenacalendar,
            cssUrls:['bower/pikaday/css/pikaday.css',
                     'bower/tether/dist/css/tether.css'],
            importsUrl:['bower/moment/moment.js',
                        'bower/pikaday/pikaday.js',
                        'bower/tether/dist/js/tether.js',
                        {url:'src/componentsImports/UXDatePicker.js',typemodule:'module'}]
        })
        mycalendar.initevent=function(options,id){
            //console.log("estoy aqui en init event con id:"+id)
            
            new controls.UXDatePicker({
                id:id
              })
        }
        */
        var mysearch = new _component.components.container({
            selector: 'my-search',
            textTemplate: _inputbusqueda2.default
        });
        var mycombo = new _component.components.container({
            selector: 'my-combo',
            textTemplate: _inputcombo2.default,
            cssUrls: ['bower/tether/dist/css/tether.css', 'src/components/panel/04PanelScroll01.css', 'src/components/list/03datalist01.css'],
            importsUrl: ['bower/tether/dist/js/tether.js', { url: 'src/componentsImports/UXDataList.js', typemodule: 'module' }, { url: 'src/componentsImports/UXButtonScroll.js', typemodule: 'module' }]
        });
        mycombo.initevent = function (options, id) {
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
        };
        //console.log(cadenainput)
        var myinput = new _component.components.container({
            selector: 'my-input',
            textTemplate: _input2.default
        });
        var mypanelscrollcontent = new _component.components.container({
            selector: 'my-panel-scroll-content',
            textTemplate: _scroll2.default,
            cssUrls: ['src/components/panel/04PanelScroll02.css'],
            importsUrl: [{ url: 'src/componentsImports/UXScroll.js', typemodule: 'module' }, { url: 'src/componentsImports/UXPanelScroll.js', typemodule: 'module' }]
        });
        mypanelscrollcontent.initevent = function (options, id) {

            //console.log("estoy en mypanelscrollcontent")
            //console.log("id :"+id)
            if (id == "panelMesas") {
                //mylistgrpbuttons.setData(mesas)
                var panelmesasReact = _react2.default.createElement('my-list-grp-buttons', { id: 'list-panel-mesas' });
                var myPanelMesas = new _component.components.container({
                    container: '#tabMesas .panel-scroll-item',
                    ReactDOM: _reactDom2.default,
                    templateReact: panelmesasReact
                });
                myPanelMesas.initevent = function (options, id) {
                    //console.log("estoy en Panel mesas")
                    //console.log("panelMesas Id:"+id)
                    //mylistgrpbuttons.options.data=mesas
                    mylistgrpbuttons.setData(_listInMemory.mesas, 'list-panel-mesas');
                    //$('#list-panel-mesas')[0].render(mylistgrpbuttons.options.templateReact,mesas)
                };

                myPanelMesas.create = function () {
                    //console.log(id)
                    console.log("estoy en panelMesas create");

                    var panel = new controls.UXPanelScroll({
                        id: id,
                        item: ".list-grp-buttons .list-grp-content-top"
                    });
                };
            } else if (id == "panelArticulos") {
                //mylistgrpbuttons.setData(articulos)     
                var panelArticulosReact = _react2.default.createElement('my-list-grp-buttons', { id: 'list-panel-articulos' });
                var myPanelArticulos = new _component.components.container({
                    container: '#tabArticulos .panel-scroll-item',
                    ReactDOM: _reactDom2.default,
                    templateReact: panelArticulosReact
                });
                myPanelArticulos.initevent = function (options, id) {
                    //console.log("estoy en panel Articulos")
                    //console.log("panelArticulos Id:"+id)
                    //mylistgrpbuttons.options.data=articulos
                    mylistgrpbuttons.setData(_listInMemory.articulos, 'list-panel-articulos');
                    //$('#list-panel-articulos')[0].render(mylistgrpbuttons.options.templateReact,articulos)
                    //console.dir(mylistgrpbuttons)
                };
                myPanelArticulos.create = function () {
                    console.log("estoy en panelArticulos create");

                    var panel = new controls.UXPanelScroll({
                        id: id,
                        item: ".list-grp-buttons .list-grp-content-top"
                    });
                };
            }
        };

        //console.log(cadenaform);
        var webform = new _component.components.container({
            selector: 'my-form',
            textTemplate: _myform2.default,
            cssUrls: ['src/components/forms/03form-fix-basic-01.css']
        });
        var cadenaScroll03React = _react2.default.createElement('my-slide', { id: 'slide01' });
        var cadenaScroll05React = _react2.default.createElement('my-slide-panel', null);
        var cadenaScroll06React = _react2.default.createElement('my-tab', null);
        var webscroll = new _component.components.container({
            selector: 'my-scroll',
            ReactDOM: _reactDom2.default,
            templateReact: cadenaScroll06React
            //textTemplate: cadenascroll03,
            //cssUrls:['src/components/panel/04PanelScroll02.css']
        });
        webscroll.initevent = function () {
            console.log("estoy en webscroll");
        };
        var slideReact = _react2.default.createElement(
            'div',
            { className: 'slide-container' },
            _react2.default.createElement(
                'button',
                { className: 'slide-button left' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-2x' })
            ),
            _react2.default.createElement(
                'div',
                { className: 'slide-items' },
                _react2.default.createElement(
                    'ul',
                    { 'class': 'cf' },
                    _react2.default.createElement(
                        'li',
                        null,
                        '1'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '2'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '3'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        '4'
                    )
                )
            ),
            _react2.default.createElement(
                'button',
                { className: 'slide-button right' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-2x' })
            ),
            _react2.default.createElement('div', { className: 'slide-controls' })
        );
        var myslide = new _component.components.container({
            selector: 'my-slide',
            ReactDOM: _reactDom2.default,
            templateReact: slideReact,
            //textTemplate:cadenaslide,
            cssUrls: ['src/components/slides/04slide-container.css', 'src/components/list/03List-group-buttons.css'],
            importsUrl: ['bower/hammerjs/hammer.min.js', 'src/componentsImports/componentsslidecontainer.js']
        });
        myslide.initevent = function (options, id) {

            //Si no definimos esto no saldra el panel
            //dibujado sus elementos li porque
            //hemos puesto por defecto que salga
            //oculto hasta que no inicializemos
            //el slide.
            var slide = new controls.slide();
        };
        /**************************************************** */
        var myTabs01 = new _component.components.container({
            selector: "my-tab",
            textTemplate: _Tabs2.default,
            cssUrls: ['src/components/tabs/tabs01.css'],
            importsUrl: ['src/componentsImports/componentstabcontainer.js']
        });
        myTabs01.initevent = function (options, id) {
            //console.dir(controls) 
            var tabs = new controls.tab();
        };

        /****************************************************** */
        var myslidePerspective = new _component.components.container({
            selector: 'my-slide-perspective',
            textTemplate: _slide04perspective2.default,
            cssUrls: ['src/components/slides/04slide-Perspective01.css'],
            importsUrl: ['src/componentsImports/componentsSlidePerspective.js']
        });
        myslidePerspective.initevent = function (options, id) {
            var slidep = new controls.slidePerspective();
        };
        /*************************************** */
        var slidePanelContainerReact = _react2.default.createElement(
            'div',
            { className: 'slide-container' },
            _react2.default.createElement(
                'button',
                { className: 'slide-button left' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-2x' })
            ),
            _react2.default.createElement('div', { className: 'slide-items' }),
            _react2.default.createElement(
                'button',
                { className: 'slide-button right' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-2x' })
            )
        );
        //si no cargarmos el componente
        //el template se dibujara como vacio,
        //ya que esta su propiedad css visibility hide
        //o algo parecido.
        var mySlidePanel = new _component.components.container({
            selector: "my-slide-panel",
            ReactDOM: _reactDom2.default,
            templateReact: slidePanelContainerReact,
            //textTemplate:cadenaSlidePanel,
            cssUrls: ['src/components/slides/04slide-container.css', 'src/components/list/03List-group-buttons.css'],
            importsUrl: ['bower/hammerjs/hammer.min.js', { url: 'src/componentsImports/componentsslidePanels.js', typemodule: 'module' }]
        });

        mySlidePanel.initevent = function (options, id) {
            //console.log("estoy dentro de slidepanel")

            var self = this;
            if (id == "panelCategorias") {
                /******************************** */
                /* le pongo un timerout para que le tiempo */
                /* a calcular bien la anchura */
                var mytimer = setTimeout(function () {
                    DrawPanelReactDetail("categoria", self, _listInMemory.categorias, id);
                }, 350);
            }
        };

        var scrollPanelContentReact = function scrollPanelContentReact(data, nameDescripcion) {
            return _react2.default.createElement(
                'div',
                { className: 'list-grp-buttons space-top-1x' },
                data.map(function (value, index) {
                    return _react2.default.createElement(
                        'a',
                        { className: 'list-grp-button box-shadow-3', href: '#', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'list-grp-content-top' },
                            _react2.default.createElement(
                                'span',
                                { className: 'list-grp-content-text list-grp-context-text-center' },
                                value[nameDescripcion]
                            )
                        )
                    );
                })
            );
        };
        var mylistgrpbuttons = new _component.components.container({
            selector: 'my-list-grp-buttons',
            ReactDOM: _reactDom2.default,
            //data:mesas,
            nameDescription: "descripcion",
            templateReact: scrollPanelContentReact,
            cssUrls: ['src/components/list/03List-group-buttons.css']

        });
        mylistgrpbuttons.initevent = function (options, id) {
            //console.log("Estoy en list grp buttons")
            //console.log(id)

        };
        mylistgrpbuttons.reloaddata = function (options, id) {}
        //console.log("estoy en reload list grp buttons")
        //console.log(id)

        /************************************************* */
        ;var weblayout = new _component.components.container({
            //container:".container .pages",
            selector: 'my-layout',
            pathTemplate: "src/shared/templ/",
            nametemplate: (0, _jquery2.default)(".container .pages").data("template"),
            cssUrls: ['src/components/layouts/03layout02/03layout02.css', 'src/components/menu-horizontal/03menu-horizontal01.css', 'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css', 'src/components/layouts/03layout02/03transition02.css'],
            importsUrl: ["bower/mousetrap/mousetrap.min.js", "node_modules/inputmask/dist/inputmask/inputmask.js", "bower/hammerjs/hammer.min.js", "src/shared/js/behaviors03layout02.js"]
        });

        //Este ejemplo tiene clearContainer.

        var container = new _component.components.container({
            container: '.container .pages',
            pathTemplate: 'src/shared/templ/',
            clearContainer: true,
            nametemplate: "webLayout"
        });
        container.initevent = function () {}
        //console.dir($("#slide01")[0])

        /*
        container.create(function(options){   
            var scroll = new components.container({
              nameid: '#root',
              container: '.main .content',
              textTemplate: cadenascroll,
              cssUrls:['src/components/panel/04PanelScroll02.css']
            }, {
              renderName: 'renderTemplateRaw'
            }) 
        })
        */
        ;
    }
});
