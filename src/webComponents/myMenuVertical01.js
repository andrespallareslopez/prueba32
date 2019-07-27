import {Component} from 'src/componentsImports/componentDecorator.js'
import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";


import cadenamenuvertical01 from 'src/components/menu-vertical/tmplverticalmenu01.html!text'
import cadenatemplatescrollbind from 'src/components/panel/templatepanelscrollbind.html!text'


@Component({
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
       console.log($(e.target).data("panel-id"))
       console.log("estoy dentro de onclickmenu personalizada")
       var id=$(e.target).data("panel-id")
       
       var template=cadenatemplatescrollbind
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
