import React from 'react'
import ReactDOM from 'react-dom'


import {Component} from 'src/componentsImports/componentDecorator.js'
import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";
import cadenatemplatescrollbind01 from 'src/components/panel/templatepanelscrollbind-01.html!text'
import cadenatemplatescrollbind02 from 'src/components/panel/templatepanelscrollbind-02.html!text'
import cadenatemplatescrollbind03 from 'src/components/panel/templatepanelscrollbind-03.html!text'
import cadenatemplatescrollbind04 from 'src/components/panel/templatepanelscrollbind-04.html!text'


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
<ul class="menu-vertical-04">
                <li class="parent element pr"><a class="element-link gr menu text ripple" href="#" >Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>
                    <ul class="sub-menu sb" >
                        <li class="" ><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>
                        <li class="" ><a class="element-link el ripple" href="#/controller/action1" data-panel-id="template01" >SubLink 1</a></li>
                        <li class="" ><a class="element-link el ripple" href="#/controller/action2" data-panel-id="template02" >SubLink 2</a></li>
                        <li class="" ><a class="element-link el ripple" href="#/controller/action3" data-panel-id="template03" >SubLink 3</a></li>
                        <li class=""><a class="element-link el ripple" href="#/controller/action4" data-panel-id="template04" >SubLink 4</a></li>
                        <li class=""><a class="element-link el ripple" href="#/controller/action5" data-panel-id="template05" >SubLink 5</a></li>     
                    </ul>  
                    
                </li>
                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 2<span class="fa fa-chevron-right push-float-right" ></span></a>
                    <ul class="sub-menu sb" >
                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>
                       <li class=""><a class="element-link el ripple" href="#/controller2/action1" data-panel-id="template06" >SubLink 11</a></li>
                       <li class=""><a class="element-link el ripple" href="#/controller2/action2"  data-panel-id="template07" >SubLink 22</a></li>
                       <li class=""><a class="element-link el ripple" href="#/controller2/action3"  data-panel-id="template08" >SubLink 33</a></li>
                       <li class=""><a class="element-link el ripple" href="#/controller2/action4"  data-panel-id="template09" >SubLink 44</a></li>
                       <li class=""><a class="element-link el ripple" href="#/controller2/action5"  data-panel-id="template10" >SubLink 55</a></li>
                    </ul>
                    
                </li>
                <li class="element no-pr" ><a class="element-link gr menu text ripple" href="#/controller/action3">Link 3
                    <!--
                    <span class="fa-fix-chevron-right push-float-right" ></span>
                    -->
                </a>
                </li>
                <li class="parent element pr" ><a class="element-link gr menu text ripple" href="#">Link 4<span class="fa fa-chevron-right push-float-right" ></span></a>
                    <ul class="sub-menu sb" >
                       <li class=""><a class="back-element" href="#" ><span class="fa fa-chevron-left push-float-left" ></span><span class="text-back" > Back</span></a></li>
                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 1</a></li>
                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 2</a></li>
                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 3</a></li>
                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 4</a></li>
                       <li class=""><a class="element-link el ripple" href="#" >SubLinkd 5</a></li>
                    </ul> 
                    
                </li>
            </ul>

`

@Component({
    selector:'my-menu-vertical-04',
    textTemplate:cadenamenuverticalstring,
    cssUrls:[
        'src/components/menu-vertical/03Menu-vertical-04/03Menu-vertical-04.css'
    ],
    importsUrl:[ 
        {url:'src/componentsImports/UXScroll.js',typemodule:'module'},
        {url:'src/componentsImports/UXScrollV.js',typemodule:'module'},
        {url:'src/componentsImports/UXMenuPanel.js',typemodule:'module'},
        {url:'src/componentsImports/UXLoadPanel.js',typemodule:'module'},
        {url:'src/componentsImports/bindOn.js',typemodule:'module'},
        {url:'src/componentsImports/bindElement.js',typemodule:'module'},
        {url:'src/componentsImports/bindComponent.js',typemodule:'module'}]
})
export class mymenuvertical04{
    initevent(options,id){
        new controls.UXMenuPanel(
            {id:id,
             onClickMenu:function(e){
               console.log('Estoy en onClickMenu')
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
                        template  = '<my-page-load-spinner-01 id="template09" ></my-page-load-spinner-search-01>'
                    break;
                    case 'template10':
        
                    break;
        
                }
                
                new controls.UXLoadPanel({id:id,
                                          textTemplate:(function(template){
                                             return template
                                          })(template)
                })
                

            }
        })
        
    }
}










