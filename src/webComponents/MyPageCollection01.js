import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'
import {UXScroll} from 'src/componentsImports/UXScroll.js'
import {UXPanelScroll} from 'src/componentsImports/UXPanelScroll.js'

import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";


var pageindex=0;
var pagerow=29;
const datos={
    grupos:[{codgrupo:1,description:"Bebida"},
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
            {codgrupo:29,description:"Chips"}]
};
const datospagina=Enumerable.from(datos.grupos)
                        //.take(index*pagerow)
                        .skip(pageindex*pagerow)
                        .take(pagerow)
                        .select("$").toArray();

const cadenapagestring = `
<div  class="wrapper page child" >
    <div class="nav" data-bind-html="content:onLoadContent">
        <nav  >
           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >
             <span class="fa fa-chevron-left" ></span>
             <span class="texto-btn" data-bind-to="text:labelback" > Back</span>
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
        <footer  data-bind-html='property:textTemplate'>
            
            <my-panel-scroll-popup id='popup01'></my-panel-scroll-popup>
            

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

const cadenalistcollection01=`
<ul class="list-collection "  >
{{#each grupos}}
     <li>

        <div class="el-left" >
        <!--<img src="src/img/64.svg" >-->
        </div>
            <div class="el-content" >

              <h2>{{description}}</h2>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quidem facilis nisi soluta dicta, asperiores, fugiat enim ab adipisci doloribus quaerat at saepe suscipit labore. Sit ipsa esse illo reprehenderit?</p>
                       
            </div>
            <a class="list-element el-right ripple" href="#" >
                <span class="fa fa-chevron-right center" ></span>
            </a>
     </li>
{{/each}}
</ul>
`
let datosindexpagina={grupos:datospagina};
let $template
let $buttonBack
@Component({
    selector: 'my-page-collection-01',
    textTemplate: cadenapagestring
})
export class mypagecollection01{
    
    initevent(options,id){
        let self=this
        console.log("estoy en mypagecollection01")
        console.log(id)
        var buttonBackAnimation = new controls.UXButtonPanelChangeAnimation({
            id:id
        })
        
        var panel=new components.container({
            container:'#'+id+' .wrapper.page.child .box.content',
            textTemplate: cadenapanelscroll01
          });
          panel.create(function(options){
            var list=new components.container({
                container:'#'+id+' .wrapper.page.child .box.content .panel-scroll-item',
                data:datosindexpagina,
                textTemplate: cadenalistcollection01
              });
            list.initevent=function(options){
                console.log("estoy dentro de colledion list")
                var scroll=new controls.UXPanelScroll({
                    id:id,
                    item:".list-collection li"
                })
            }        
          })
    }

}
