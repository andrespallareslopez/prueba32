import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'


const cadenaPanelScrollString = `
    <button id="btn-footer-menu01" class="nav-mobile center-v push-float-right ripple" >
    <i class="fa fa-ellipsis-h fa-2x" ></i>
    </button>
    <div id="footer01" class="footer-menu" >
    <div class="panel-scroll" >
    <div class="panel-scroll-content" >
    <div class="panel-scroll-item" >
    <ul id="menupopup01" class="menu-popup01" >
    <li class="element item itm"><a class="element-link el ripple" href="#/template1">Link 1</a></li>
    <li class="element item itm"><a class="element-link el ripple" href="#/template2">Link 2</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template3">Link 3</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template4">Link 4</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template5">Link 5</a></li>  
    <li class="element item itm"><a class="element-link el ripple" href="#/template6">Link 6</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template7">Link 7</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template8">Link 8</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template9">Link 9</a></li> 
    <li class="element item itm"><a class="element-link el ripple" href="#/template10">Link 10</a></li> 
    </ul>
    </div>
    </div>
    <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>
    <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>
    </div>
    </div>
`
@Component({
    selector: 'my-panel-scroll-popup',
    textTemplate: cadenaPanelScrollString,
    cssUrls:[ 
              'src/components/footer/03Menu-popup01.css',
              'src/components/footer/04footermenu01.css'],
    importsUrl:[{url:'src/componentsImports/componentspanel01.js',typemodule:'module'},
                {url:'src/componentsImports/UXScrollPopUp.js',typemodule:'module'}]
    
})
export class mypanelscrollpopup {
  
  initevent(options,id){
    console.log("estoy dentro de mypanelscrollpopup")
    console.log(id)
    
    var scrollpopup= new controls.UXScrollPopUp({
      id: id  
    })
    
    /*
    var scrollPanel=new controls.panelScroll({
        nameid:"#root ",
        container:".main .content",
        containerComponent:".panel-scroll-01",
        endScroll:function(){
          console.log("estoy al final del scroll");
        },
        //scroll:".panel-scroll-content",
        //items:".panel-scroll-item",
        item:".list-collection li"
        //btnup:"#btn-slide-up",
        //btndown:"#btn-slide-down",
        //fnClickElement:clickElementAccordion
     });
     scrollPanel.initevent();
     */
    
  }

  reloaddata(options,id){
    //console.log("estoy en reload")
    //console.log(id)
  }
  
}

