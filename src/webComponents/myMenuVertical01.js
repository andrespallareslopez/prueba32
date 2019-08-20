import React from 'react'
import ReactDOM from 'react-dom'


import {Component} from 'src/componentsImports/componentDecorator.js'
import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";


import cadenamenuvertical01 from 'src/components/menu-vertical/tmplverticalmenu01.html!text'

import cadenatemplatescrollbind from 'src/components/panel/templatepanelscrollbind.html!text'
import cadenatemplatescrollbind01 from 'src/components/panel/templatepanelscrollbind-01.html!text'
import cadenatemplatescrollbind02 from 'src/components/panel/templatepanelscrollbind-02.html!text'
import cadenatemplatescrollbind03 from 'src/components/panel/templatepanelscrollbind-03.html!text'
import cadenatemplatescrollbind04 from 'src/components/panel/templatepanelscrollbind-04.html!text'
import cadenatemplatescrollbind05 from 'src/components/panel/templatepanelscrollbind-05.html!text'









const cadenatemplatescrollbindstring=`

<div id={{id}} class="wrapper page child" >
    <div class="nav" data-bind-html="content:onLoadContent">
        <nav  >
           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left" data-bind-style="display:cadena" data-bind-on="click:onClick" >
             <span class="fa fa-chevron-left" ></span>
             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>
           </button>
        </nav>
    </div>  
    <div class="main" >
       <main>
          <div class="box content" data-bind-html='include:src/shared/templ/list-collection.html' >
                
          </div>
       </main>
    </div>
    <div class="footer">
        <footer  data-bind-html='property:textTemplate'>
            
        </footer>
    </div>
</div>
`



const cadenamenuverticalstring=`

<div class="menu-vertical01"  >
 <div class="container-menu-scroll" >
                <ul class="items " >
                    <li class="parent element pr"><a class="element-link gr ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>
                         <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#/plantilla1" data-panel-id="template01" >SubLink 1</a>
                           <a class="element-link el ripple" href="#/plantilla2" data-panel-id="template02" >SubLink 2</a>
                           <a class="element-link el ripple" href="#/plantilla3" data-panel-id="template03" >SubLink 3</a>
                           <a class="element-link el ripple" href="#/plantilla4" data-panel-id="template04" >SubLink 4</a>
                           <a class="element-link el ripple" href="#/plantilla5" data-panel-id="template05" >SubLink 5</a>
                         </div>
                    </li>
                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>
                         <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#/plantilla6" data-panel-id="template06" >SubLink 1</a>
                           <a class="element-link el ripple" href="#/plantilla7" data-panel-id="template07" >SubLink 2</a>
                           <a class="element-link el ripple" href="#/plantilla8" data-panel-id="template08" >SubLink 3</a>
                           <a class="element-link el ripple" href="#/plantilla9" data-panel-id="template09" >SubLink 4</a>
                           <a class="element-link el ripple" href="#/plantilla10" data-panel-id="template10" >SubLink 5</a>
                         </div>
                    </li>
                    <li class="element item itm" ><a class="element-link el ripple" href="#/plantilla11">Link 3
                        <!--
                        <span class="fa-fix-chevron-right push-float-right" ></span>
                        -->
                    </a>
                    
                    </li>
                    <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>
                       <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#" >SubLink 1</a>
                           <a class="element-link el ripple" href="#" >SubLink 2</a>
                           <a class="element-link el ripple" href="#" >SubLink 3</a>
                           <a class="element-link el ripple" href="#" >SubLink 4</a>
                           <a class="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                     <li class="parent element pr" ><a class="element-link gr ripple" href="#">Link 5<span class="fa fa-chevron-right push-float-right" ></span></a>
                       <div class="sub-menu sb" >
                           <a class="element-link el ripple" href="#" >SubLink 1</a>
                           <a class="element-link el ripple" href="#" >SubLink 2</a>
                           <a class="element-link el ripple" href="#" >SubLink 3</a>
                           <a class="element-link el ripple" href="#" >SubLink 4</a>
                           <a class="element-link el ripple" href="#" >SubLink 5</a>
                       </div>
                    </li>
                </ul>
              </div>
              <button id="btn-slide-up" class="slide-button top" ><i class="fa fa-chevron-up fa-2x"></i></button>
              <button id="btn-slide-down" class="slide-button bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>
    </div>  

`

@Component({
    selector:'my-menu-vertical-01',
    textTemplate:cadenamenuverticalstring,
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
export class mymenuvertical01{

  initevent(options,id){
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
    id:id
   })    
   new controls.UXAccordeon({
    id:id,
    onClickMenu:function(e){
       //console.dir(e)
       e.preventDefault()
       console.log($(e.target).data("panel-id"))
       console.log("estoy dentro de onclickmenu personalizada")
       var id=$(e.target).data("panel-id")
       var template;
       switch(id){
          case 'template01':
            console.log("estoy en "+id)
            template = cadenatemplatescrollbindstring
          break;
          case 'template02':
            console.log("estoy en "+id)
            template = cadenatemplatescrollbind01
          break;
          case 'template03':
            template = cadenatemplatescrollbind02
          break;
          case 'template04':
            template = cadenatemplatescrollbind03 
          break;
          case 'template05':
            template = cadenatemplatescrollbind04
          break;
          case 'template06':
             template = '<my-page-collection-01 id="template06"></my-page-collection-01>'
          break;
          case 'template07':
             template = '<my-page-form-01 id="template07" ></my-page-form-01>'
          break;
          case 'template08':
             template  = '<my-page-search-01 id="template08" ></my-page-search-01>'
          break;
          case 'template09':

          break;
          case 'template10':

          break;

       }
       //template = cadenatemplatescrollbindstring
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
       var containerView=".main-body"
       var $template=$('#'+id+'.wrapper.page.child');
       /*
         puede ser que el id no este al misno nivel que .wrapper.page.child
         por tanto tenemos que tratar de buscar por id+' .wrapper.page.....
       */
      if (!$template[0]){
        $template=$('#'+id+' .wrapper.page.child');
      }
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
                var reftemplate= '#'+id+'.wrapper.page.child'
                if ($template.length==0){
                  $template=$('#'+id+' .wrapper.page.child');
                  reftemplate='#'+id+' .wrapper.page.child'
                }
                if ($template.hasClass("animation")){
                 $template.removeClass("animation")
                 if (remove){
                     var timer=setTimeout(function(){
                         //removeContainer('#'+id+'.wrapper.page.child')
                         removeContainer(reftemplate)
                         clearTimeout(timer)
                     },400)
                     
                     
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
   })
  }
}

