'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lite = require('node_modules/webcomponentsjs/lite.js');

var _lite2 = _interopRequireDefault(_lite);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _component = require('component');

var _scroll = require('src/shared/templ/scroll02.html!text');

var _scroll2 = _interopRequireDefault(_scroll);

var _scroll3 = require('src/shared/templ/scroll04.html!text');

var _scroll4 = _interopRequireDefault(_scroll3);

var _scroll5 = require('src/shared/templ/scroll05.html!text');

var _scroll6 = _interopRequireDefault(_scroll5);

var _slide = require('src/components/slides/slide03.html!text');

var _slide2 = _interopRequireDefault(_slide);

var _datalist = require('src/shared/templ/datalist02.html!text');

var _datalist2 = _interopRequireDefault(_datalist);

var _templatepanelactions = require('src/components/panel/templatepanelactions.html!text');

var _templatepanelactions2 = _interopRequireDefault(_templatepanelactions);

var _templatepanelscroll = require('src/components/panel/templatepanelscroll.html!text');

var _templatepanelscroll2 = _interopRequireDefault(_templatepanelscroll);

var _myNav = require('src/lib/myNav.js');

var _myCalendar = require('src/lib/myCalendar.js');

var _myCombo = require('src/lib/myCombo.js');

var _myInput = require('src/lib/myInput.js');

var _myComboSearch = require('src/lib/myComboSearch.js');

var _myMenuVertical = require('src/lib/myMenuVertical01.js');

var _myMenuVertical2 = require('src/lib/myMenuVertical04.js');

var _myListGrpButtons = require('src/lib/myListGrpButtons.js');

var _myTabs = require('src/lib/myTabs.js');

var _myForm = require('src/lib/myForm.js');

var _myWebLayout = require('src/lib/myWebLayout.js');

var _myPanelScrollContent = require('src/lib/myPanelScrollContent.js');

var _mySlidePanel = require('src/lib/mySlidePanel.js');

var _myScroll = require('src/lib/myScroll.js');

var _mySlide = require('src/lib/mySlide.js');

var _mySlidePerspective = require('src/lib/mySlidePerspective.js');

var _myPanelScrollPopUp = require('src/lib/myPanelScrollPopUp.js');

var _myMenuHorizontal = require('src/lib/myMenuHorizontal.js');

var _MyPageCollection = require('src/lib/MyPageCollection01.js');

var _MyPageForm = require('src/lib/MyPageForm01.js');

var _MyButtonSearch = require('src/lib/MyButtonSearch.js');

var _MyPageSearch = require('src/lib/MyPageSearch01.js');

var _MyPageLoadSpinner = require('src/lib/MyPageLoadSpinner01.js');

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

//import cadenaTabs01 from 'src/shared/templ/Tabs01.html!text'


//import {keyform} from 'keyform'

//import cadenascroll from 'src/shared/templ/scroll01.html!text'  
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
        /*
        var mymenuvertical01=new components.container({
            selector:'my-menu-vertical-01',
            textTemplate:cadenamenuvertical01,
            cssUrls:[
                'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css',
                'src/components/list/03List-collections.css'
            
            ],
            importsUrl:[ 
                {url:'src/componentsImports/UXScroll.js',typemodule:'module'},
                {url:'src/componentsImports/UXScrollV.js',typemodule:'module'},
                {url:'src/componentsImports/UXAccordeon.js',typemodule:'module'},
                {url:'src/componentsImports/bindOn.js',typemodule:'module'},
                {url:'src/componentsImports/bindElement.js',typemodule:'module'},
                {url:'src/componentsImports/bindComponent.js',typemodule:'module'}]
        })
        mymenuvertical01.initevent=function(options,id){
           
           new controls.UXScrollV({
            id:id
           })    
           new controls.UXAccordeon({
            id:id,
            onClickMenu:function(e){
               //console.dir(e)
               console.log($(e.target).data("panel-id"))
               console.log("estoy dentro de onclickmenu personalizada")
               var id=$(e.target).data("panel-id")
               
               var template=cadenatemplatescrollbind
              
            
               //console.dir(html)
               
               
               
               //var $containerChild=$(".wrapper.page.child")
               var containerView=".main-body"
               var $template=$('#'+id+'.wrapper.page.child');
               var $buttonBack
               
               //console.dir($template)
               if ($template.length==0 && id){
                  
                 var panelControl=new components.container({
                    container:containerView,
                    textTemplate:template,
                    data:{id:id}
                 })
                 panelControl.initevent=function(options){
                     console.log('estoy dentro de initeent de panelControl')
                     var timer=setTimeout(function(){
                        changeAnimation()
                        clearTimeout(timer)
                     },350)
                      
                       
                     onClick()  
                     
                     
                     function onClick(){
                        console.log("estoy en onClick")
                        $buttonBack=$('#'+id+' '+'#btn-toggle-back-3')
                        //console.dir($buttonBack)
                        $buttonBack.on("click",function(e){
                          console.log("estoy dentro de click")
                          changeAnimation(true) 
                          
                          
                        })
                    }
                    function changeAnimation(remove){
                        console.log("estoy dentro de changeAnimation")
                        //console.dir($template)
                        $template=$('#'+id+'.wrapper.page.child');
                        if ($template.hasClass("animation")){
                         $template.removeClass("animation")
                         if (remove){
                             var timer=setTimeout(function(){
                                 removeContainer('#'+id+'.wrapper.page.child')
                                 clearTimeout(timer)
                             },350)
                             
                             
                         }
                        }else{
                         $template.addClass("animation")
                        }
                    }
                    
                    function onDestroy(){
                     
                    }
                 }
                 
                 panelControl.bind=function(options){
                     var self=this;
                     console.log("estoy en function bind")
                     console.dir(self)
                     
                     var bind=new controls.BindComponent({
                         containerView:'#'+id,
                         target:self
                     })
                     
                 }
                 panelControl.onClick=function(e){
                    console.log("estoy dentro de panelControl Click")
                 }
                 
               }
              
            
             
            }
           })
        }
        */
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
        /*
         var mysearch=new components.container({
             selector: 'my-search',
             textTemplate:cadenabusqueda
         })
         */
        /*
        var mycombo=new components.container({
            selector:'my-combo',
            textTemplate:cadenacombo,
            cssUrls:['bower/tether/dist/css/tether.css',
            'src/components/panel/04PanelScroll01.css',
            'src/components/list/03datalist01.css'
            ],
            importsUrl:['bower/tether/dist/js/tether.js',
            {url:'src/componentsImports/UXDataList.js',typemodule:'module'},
            {url:'src/componentsImports/UXButtonScroll.js',typemodule:'module'}
            ]
        })
        mycombo.initevent=function(options,id){
            var scroll;
            var datalist;
            //console.log(id);
            datalist=new controls.UXDataList({
                id:id,
                clearContainer:true,
              
                onButtonClick:function(options){
                    if (id=="combo01")    
                      datalist.setData({articulos:articulos},id,cadenadataarticulos)
                    else if(id=="combo02")
                      datalist.setData({mesas:mesas},id,cadenadatamesas)
                       
                    scroll=new controls.UXButtonScroll({
                        id:id+'datalist',
                        onItemClick:function(value,target){
                            console.dir(target)
                            //console.log("estoy dentro de onItemClick")
                            datalist.$inputText.val(value);
                            datalist.toggle();
                            scroll.destroy();
                        }
                    })
                },
                onClose:function(){
                   scroll.destroy();
                }
            })
        }
        */
        //console.log(cadenainput)
        /*
        var myinput=new components.container({
            selector:'my-input',
            textTemplate:cadenainput
        })
        */
        /*
         var mypanelscrollcontent=new components.container({
             selector:'my-panel-scroll-content',
             textTemplate:cadenascroll,
             cssUrls:['src/components/panel/04PanelScroll02.css'],
             importsUrl:[
                 {url:'src/componentsImports/UXScroll.js',typemodule:'module'}, 
                 {url:'src/componentsImports/UXPanelScroll.js',typemodule:'module'}]
         })
         mypanelscrollcontent.initevent=function(options,id){
             
             //console.log("estoy en mypanelscrollcontent")
             //console.log("id :"+id)
             if (id=="panelMesas"){
                 //mylistgrpbuttons.setData(mesas)
                var panelmesasReact=(
                 <my-list-grp-buttons id="list-panel-mesas"></my-list-grp-buttons>
                )
                var myPanelMesas = new components.container({
                  container:'#tabMesas .panel-scroll-item',
                  ReactDOM:ReactDOM,
                  templateReact:panelmesasReact  
                }) 
                myPanelMesas.initevent=function(options,id){
                   //console.log("estoy en Panel mesas")
                   //console.log("panelMesas Id:"+id)
                   //mylistgrpbuttons.options.data=mesas
                   var $listMesas=$("#list-panel-mesas")[0]
                   //console.dir($listMesas.setData)
                   $listMesas.setData(mesas,'list-panel-mesas')
                   //mylistgrpbuttons.setData(mesas,'list-panel-mesas')
                   //$('#list-panel-mesas')[0].render(mylistgrpbuttons.options.templateReact,mesas)
                }
                
                myPanelMesas.create=function(){
                    //console.log(id)
                    console.log("estoy en panelMesas create")
                      
                      var panel=new controls.UXPanelScroll({
                         id:id,
                         item:".list-grp-buttons .list-grp-content-top"
                      })
                    
                    
                }
             } else if (id=="panelArticulos"){
                 //mylistgrpbuttons.setData(articulos)     
                 var panelArticulosReact=(
                     <my-list-grp-buttons id="list-panel-articulos"></my-list-grp-buttons>
                 )
                 var myPanelArticulos=new components.container({
                     container:'#tabArticulos .panel-scroll-item',
                     ReactDOM:ReactDOM,
                     templateReact:panelArticulosReact
                 })
                 myPanelArticulos.initevent=function(options,id){
                     //console.log("estoy en panel Articulos")
                     //console.log("panelArticulos Id:"+id)
                     //mylistgrpbuttons.options.data=articulos
                     //console.dir(mylistgrpbuttons)
                     var $listArticulos=$('#list-panel-articulos')[0]
                     $listArticulos.setData(articulos,'list-panel-articulos') 
                     //mylistgrpbuttons.setData(articulos,'list-panel-articulos')                                       
                     //$('#list-panel-articulos')[0].render(mylistgrpbuttons.options.templateReact,articulos)
                     //console.dir(mylistgrpbuttons)
                     
                 }
                 myPanelArticulos.create=function(){
                     console.log("estoy en panelArticulos create")
                      
                     var panel=new controls.UXPanelScroll({
                        id:id,
                        item:".list-grp-buttons .list-grp-content-top"
                     })
                 }
             }
         }
         */
        //console.log(cadenaform);
        /*
        var webform=new components.container({
            selector:'my-form',
            textTemplate:cadenaform,
            cssUrls:['src/components/forms/03form-fix-basic-01.css']
        });
        */
        var cadenaScroll03React = _react2.default.createElement('my-slide', { id: 'slide01' });

        var cadenaScroll05React = _react2.default.createElement('my-slide-panel', null);

        /*
        const cadenaScroll06React=(
            <my-tab></my-tab>
        )
        var webscroll=new components.container({
           selector:'my-scroll',
           ReactDOM:ReactDOM,
           templateReact:cadenaScroll06React
           //textTemplate: cadenascroll03,
           //cssUrls:['src/components/panel/04PanelScroll02.css']
        });
        webscroll.initevent=function(){
            console.log("estoy en webscroll")
           
        }
        */
        /*
        const slideReact=(
            <div className="slide-container">
               <button className="slide-button left">
                 <i className="fa fa-chevron-left fa-2x" ></i>
               </button>
               <div className="slide-items">
                 <ul class="cf" >
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
                   <li>4</li>
                 </ul>
               </div>
               <button className="slide-button right">
                 <i className="fa fa-chevron-right fa-2x"></i>
               </button>
               <div className="slide-controls"></div>
            </div>
        )
        var myslide=new components.container({
           selector:'my-slide',
           ReactDOM:ReactDOM,
           templateReact:slideReact,
           //textTemplate:cadenaslide,
           cssUrls:['src/components/slides/04slide-container.css',
           'src/components/list/03List-group-buttons.css'],
           importsUrl:['bower/hammerjs/hammer.min.js',
                       'src/componentsImports/componentsslidecontainer.js'
           ]
        })  
        myslide.initevent=function(options,id){
        
            //Si no definimos esto no saldra el panel
            //dibujado sus elementos li porque
            //hemos puesto por defecto que salga
            //oculto hasta que no inicializemos
            //el slide.
            var slide=new controls.slide()
               
        }
        */
        /**************************************************** */
        /*
        var myTabs01=new components.container({
            selector:"my-tab",
            textTemplate:cadenaTabs01,
            cssUrls:['src/components/tabs/tabs01.css'],
            importsUrl:['src/componentsImports/componentstabcontainer.js']
        })
        myTabs01.initevent=function(options,id){
           //console.dir(controls) 
           var tabs=new controls.tab()
           
        }        
         */

        /****************************************************** */
        /*
        var myslidePerspective=new components.container({
           selector:'my-slide-perspective',
           textTemplate:cadenaSlidePerspective,
           cssUrls:['src/components/slides/04slide-Perspective01.css'] ,
           importsUrl:['src/componentsImports/componentsSlidePerspective.js']
        })
        myslidePerspective.initevent=function(options,id){
            var slidep=new controls.slidePerspective()
        
        }
        */
        /*************************************** */
        /*
        const slidePanelContainerReact=(
           <div className="slide-container">
              <button className="slide-button left">
                <i className="fa fa-chevron-left fa-2x" ></i>
              </button>
              <div className="slide-items">
               
              </div>
              <button className="slide-button right">
                <i className="fa fa-chevron-right fa-2x"></i>
              </button>
             
           </div>
        )
        */
        //si no cargarmos el componente
        //el template se dibujara como vacio,
        //ya que esta su propiedad css visibility hide
        //o algo parecido.
        /*
        var mySlidePanel=new components.container({
           selector:"my-slide-panel",
           ReactDOM:ReactDOM,
           templateReact:slidePanelContainerReact,
           //textTemplate:cadenaSlidePanel,
           cssUrls:['src/components/slides/04slide-container.css',
           'src/components/list/03List-group-buttons.css'
             ],
           importsUrl:['bower/hammerjs/hammer.min.js',
               {url:'src/componentsImports/componentsslidePanels.js',typemodule:'module'}]  
        })
        */
        /*
        mySlidePanel.initevent=function(options,id){
            //console.log("estoy dentro de slidepanel")
            
            var self=this
            if (id=="panelCategorias"){
              
              var mytimer=setTimeout(function(){
                DrawPanelReactDetail("categoria",self,categorias,id);
              },350)
            }   
        }
        */
        /*
        function DrawPanelReactDetail(nameDescription,self,datos,id){
            var slidePanelDetailReact=function(self,nameDescripcion){
                //console.log(nameDescripcion)
                return  (<ul className="slide-container-items">
                       {
                       self.sizes.pages.map(function(page,index){     
                         return  <li className="slide-item" key={index}>
                               <div className="list-grp-buttons list-center">
                               {
                                   page.slides.map(function(slide,index){                                 
                                   //console.dir(slide);
                                   return (
                                    <a className="list-grp-button box-shadow-3" key={index}  data-codigo={slide.codigo} href="#"  >
                                     <div className="list-grp-content-top" >
                                      <span className="list-grp-content-text list-grp-context-text-center" >{slide[nameDescripcion]}</span>
                                     </div>  
                                    </a>
                                      );
                                   })
                               }
                           </div>
                           </li>
                          })
                       } 
                   </ul>);
               }
               
               var myslidePanelDetail=new controls.slidePanels({
                   container:".slide-container .slide-items",
                   ReactDOM:ReactDOM,
                   nameDescription:nameDescription,
                   data:datos,
                   templateReact:slidePanelDetailReact
                   //textTemplate:cadenaSlidePanelDetail
               })
               //no podemos utilizar en el slidePaneld el initevent, ya 
               //se utiliza internamente, si lo ponemos sobreescribiremos
               //el que hay y el componente dejara de funcionar
               myslidePanelDetail.create(function(options){
                var self=this   
                //console.log("estoy dentro de slide panel detail")
                //console.log(id)
                //en jquery hay que poner el # delante para detectar el id element
                   $("#"+id+" a.list-grp-button").on("click",function(e){
                       e.preventDefault()
                       //console.dir(this)
                       //console.dir(e.target)
                       console.log($(this).data("codigo"))
                       var codigo=$(this).data("codigo")
                       var url='http://185.194.60.156:8085/datasnap/rest/TServerMethods1/GetArticulos/'+codigo
                       
                       $.ajax({
                           url:url
                        }).done(function(result){
                            //console.dir(result)
                            var result=JSON.parse(result)
                            var articulos=result.items
                            console.dir(articulos)
                            
                       }).fail(function(e){
                          console.dir(e.error)
                       }).always(function(){
                         
                       })
                     })
               })
               
        }
        */
        /*
        var scrollPanelContentReact=function(data,nameDescripcion){
            return   <div className="list-grp-buttons space-top-1x">
                     {
                        data.map(function(value,index){
                            return (
                                <a className="list-grp-button box-shadow-3" href="#" key={index} >
                                  <div className="list-grp-content-top" >
                                   <span className="list-grp-content-text list-grp-context-text-center" >{value[nameDescripcion]}</span>
                                  </div>  
                                </a>
                               );
                        })
                     } 
                     </div>
          }
        */
        /*
        var mylistgrpbuttons = new components.container({
            selector: 'my-list-grp-buttons',
            ReactDOM:ReactDOM,
            //data:mesas,
            nameDescription:"descripcion",
            templateReact: scrollPanelContentReact,
            cssUrls:[ 'src/components/list/03List-group-buttons.css']
            
        })
        mylistgrpbuttons.initevent=function(options,id){
            //console.log("Estoy en list grp buttons")
            //console.log(id)
            
        }
        mylistgrpbuttons.reloaddata=function(options,id){
            //console.log("estoy en reload list grp buttons")
            //console.log(id)
        }
        */
        /************************************************* */
        /*
        var weblayout=new components.container({
          //container:".container .pages",
          selector:'my-layout',
          pathTemplate:"src/shared/templ/",
          nametemplate:$(".container .pages").data("template"),
          cssUrls:[ 'src/components/layouts/03layout02/03layout02.css',
                    'src/components/menu-horizontal/03menu-horizontal01.css',
                    'src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css',
                    'src/components/layouts/03layout02/03transition02.css'          
          ],
          importsUrl:[    
          "bower/mousetrap/mousetrap.min.js",
          "node_modules/inputmask/dist/inputmask/inputmask.js",
          "bower/hammerjs/hammer.min.js",
          "src/shared/js/behaviors03layout02.js"
          
          ]  
        });
        */
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

//import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

//import {Component} from 'src/componentsImports/componentDecorator.js'


//import cadenamenuvertical01 from 'src/components/menu-vertical/tmplverticalmenu01.html!text'


//import cadenaform from 'src/shared/templ/myform01.html!text'
//import cadenainput from 'src/shared/templ/input01.html!text'
//import cadenacalendar from 'src/shared/templ/inputcalendar01.html!text'
//import cadenabusqueda from 'src/shared/templ/inputbusqueda01.html!text'
//import cadenacombo from 'src/shared/templ/inputcombo01.html!text'
//import cadenanav from 'src/shared/templ/nav01.html!text'
//import cadenaslide from 'src/components/slides/slide01.html!text'
//import cadenaSlidePerspective from 'src/components/slides/slide04perspective.html!text'
//import cadenaSlidePanel from 'src/components/slides/slide01.html!text'

//import cadenascroll03 from 'src/shared/templ/scroll03.html!text'


//import {util} from 'util01'
/// <reference path="./main.d.ts" />
//importar una libreria polyfill para webcomponentes por si no esta.
//import React from '../../../node_modules/react/umd/react.production.min.js'
//import ReactDOM from '../../../node_modules/react-dom/umd/react-dom.production.min.js'
