import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'
import {UXScroll} from 'src/componentsImports/UXScroll.js'
import {UXPanelScroll} from 'src/componentsImports/UXPanelScroll.js'

import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";

const cadenapagestring = `
<div  class="wrapper page child" >
    <div class="nav" >
        <nav  >
           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >
             <span class="fa fa-chevron-left" ></span>
             <span class="texto-btn"  > Back</span>
           </button>
        </nav>
    </div>  
    <div class="main" >
       <main>
          <div class="box content"  >
                
          </div>
       </main>
    </div>
    <div class="footer">
        <footer  >
            
            <my-panel-scroll-popup id='popup02'></my-panel-scroll-popup>
            

        </footer>
    </div>
`
const cadenapanelscroll01 = `
<div class="panel-scroll-01" >
  <div class="panel-scroll-content" >
   <div class="panel-scroll-item" >

   </div>
  </div>
  <button id="btn-slide-up" class="slide-button-panel top" ><i class="fa fa-chevron-up fa-2x"></i></button>
  <button id="btn-slide-down" class="slide-button-panel bottom" ><i class="fa fa-chevron-down fa-2x"></i></button>
</div>
`
const cadenaformfix01 = `
<form id="form01" class="form-fix-basic-01 ">
<div class="datalist" ></div>
<fieldset>
    <legend>Login</legend>
    <div class="group group-block">
        <div class="label-help">
            <span class="logo fa fa-question-circle fa-2x"></span>
            <span class="text">Introduce usuario</span>
        </div>
        <div class="label-input" >
           <span class="logo fa fa-tag fa-2x" ></span>
           <input type="text" placeholder="User" class="input" >
        </div>                                             
    </div>
    <div class="group group-block">
        <div class="label-help">
            <span class="logo fa fa-question-circle fa-2x"></span>
            <span class="text">Introduce E-mail</span>
        </div>
        <div class="label-input">
            <span class="logo fa fa-tag fa-2x"></span>
            <input type="text" placeholder="E-Mail" class="input" >
        </div>
        <div class="label-warning" >
            <span class="logo fa fa-warning fa-2x" ></span>
            <span class="text">E-mail es obligatorio</span>
        </div>
    </div>

    <div class="group group-block">
        <div class="label-help">
            <span class="logo fa fa-question-circle fa-2x"></span>
            <span class="text">Introduce Password</span>
        </div>
        <div class="label-input">
            <span class="logo fa fa-tag fa-2x"></span>
            <input type="text" placeholder="Password" class="input medium">
        </div>
    </div>
    <div class="group group-block">
        <div class="label-input">
            <span class="logo fa fa-tag fa-2x"></span>
            <input type="text" placeholder="Confirm Password" class="input medium">
        </div>
        <div class="label-warning">
            <span class="logo fa fa-warning fa-2x"></span>
            <span class="text">Password Incorrecto</span>
        </div>
    </div>
</fieldset>
<fieldset>
  <div class="group group-block">
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="Busqueda" class="input medium">
        <button id="search" class="list-button"><span class="fa fa-search"></span></button>
    </div>
  </div>
</fieldset>    
<div class="group group-block">
    <div class="label-help">
        <span class="logo fa fa-question-circle fa-2x"></span>
        <span class="text">Introduce grupo </span>
    </div>
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="" class="input medium">
        <button class="list-button"><span class="fa fa-sort-desc"></span></button>
    </div>
</div>
  <div class="group group-block">
    <div class="label-help">
        <span class="logo fa fa-question-circle fa-2x"></span>
        <span class="text">Introduce familia </span>
    </div>
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="" class="input medium">
        <button class="list-button"><span class="fa fa-sort-desc"></span></button>
    </div>
</div>
  <div class="group group-block">
    <div class="label-help">
        <span class="logo fa fa-question-circle fa-2x"></span>
        <span class="text">Introduce otra fecha  </span>
    </div>
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input id="fecha1" class="input medium" type="text" placeholder="">
        <button id="btn-fecha1" class="list-button"><span class="fa fa-calendar"></span></button>
    </div>
</div>
  <div class="group group-block">
    <div class="label-help">
        <span class="logo fa fa-question-circle fa-2x"></span>
        <span class="text">Introduce fecha de nacimiento </span>
    </div>
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input id="fecha" class="input medium" type="text" placeholder="">
        <button id="btn-fecha" class="list-button"><span class="fa fa-calendar"></span></button>
    </div>
</div>
<div class="group group-block">
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="Edad" class="input small">
    </div>
</div>
<div class="group group-block">
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="DNI" class="input medium">
    </div>                                    
</div>

<div class="group group-block">
    <div class="label-input">
        <span class="logo fa fa-tag fa-2x"></span>
        <input type="text" placeholder="Hora" class="input small">
    </div>
</div>
</form>
`
let $template
let $buttonBack
@Component({
    selector: 'my-page-form-01',
    textTemplate: cadenapagestring,
    cssUrls:[ 'src/components/forms/03form-fix-basic-01.css'
                                                           ]
})
export class mypageform01{
    initevent(options,id){
        let self=this
        console.log("estoy en mypageform01")
        console.log(id)
        $template=$('#'+id+'.wrapper.page.child');
        let reftemplate= '#'+id+'.wrapper.page.child'
        if ($template.length==0){
            $template=$('#'+id+' .wrapper.page.child');
            reftemplate='#'+id+' .wrapper.page.child'
        }
        $buttonBack=$('#'+id+' '+'#btn-toggle-back-3')
                //console.dir($buttonBack)
                $buttonBack.on("click",function(e){
                  console.log("estoy dentro de click en mybuttoncollection01")
                  self.changeAnimation(true,id)          
        })
        const panel=new components.container({
            container:'#'+id+' .wrapper.page.child .box.content',
            textTemplate: cadenapanelscroll01
          });
          panel.create(function(options){
            var form=new components.container({
                container:'#'+id+' .wrapper.page.child .box.content .panel-scroll-item',
                textTemplate: cadenaformfix01
              });
            form.initevent=function(options){
                console.log("estoy dentro de form fix")
                var scroll=new controls.UXPanelScroll({
                    id:id,
                    item:".group .input"
                })
            }        
          })
        
    }    
     changeAnimation(remove,id){
        console.log("estoy dentro de changeAnimation en mypagecollection01")
        //console.dir($template)
        $template=$('#'+id+'.wrapper.page.child');
        let reftemplate= '#'+id+'.wrapper.page.child'
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
}