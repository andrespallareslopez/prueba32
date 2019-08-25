import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'
import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js"

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
}

const cadenabuttonsearchstring = `
<form class="form-search push-float-right" >
  <button id="btn-form-search" class="nav-mobile nav-mobile-search btn-search ripple" >
    <span class="fa fa-search fa-2x" ></span>
  </button>
  <input id="input-search" placeholder="Search..." class="input-search" type="text" />
  <button id="btn-form-close" class="nav-mobile nav-mobile-search btn-search btn-search-close" >
    <span class="fa fa-times fa-2x" ></span>
  </button>
</form>
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

@Component({
    selector:'my-button-search',
    textTemplate: cadenabuttonsearchstring,
    cssUrls:['src/components/search/03search.css'],
    importsUrl:[ 
      {url:'src/componentsImports/UXSearchPanel.js',typemodule:'module'}]
 })
 export class mybuttonsearch {
      
     initevent(options,id){
         //console.dir(options)
         console.log('Estoy en control my-button-search con id '+id)
         $("#"+id+" "+"#btn-form-search").on("click",function(evt){
            evt.preventDefault();  
            $("#"+id+" .form-search").toggleClass("open-search"); 
         })
         $("#"+id+" "+"#btn-form-close").on("click",function(evt){
            evt.preventDefault();
            $("#"+id+" "+" .form-search").toggleClass("open-search");
         })
         var searchinput=new controls.UXSearchPanel({
          id:id,
          onSearchBefore:function(data,value,id){
              
          },
          onSearch:function(data,value,id){
              console.log(value)
              
              if (id=="buttonsearch02"){
                let idtemp='template08'
                //var $buttonsearch02 = $("#template08 .box.content .panel-scroll-item")
                //console.dir($buttonsearch02)
                var datossearch02=Enumerable.from(datos.grupos)
                .where(
                    (grupo)=>{
                        return grupo.description.toLowerCase().includes(value)==true
                     })
                 .select("$").toArray()
                 console.dir(datossearch02)
                 
                   //$buttonsearch02.setData({grupos:datossearch02},id,)
                   
                   removeContainer('#'+idtemp+' .wrapper.page.child .box.content .panel-scroll-item .list-collection'); 
                   
                   var list=new components.container({
                      container:'#'+idtemp+' .wrapper.page.child .box.content .panel-scroll-item',
                      data:{grupos:datossearch02},
                      textTemplate: cadenalistcollection01
                   });
                   list.initevent=function(options){
                      console.log("estoy dentro de colledion list")
                      var scroll=new controls.UXPanelScroll({
                          id:idtemp,
                          item:".list-collection li"
                      })
                   }        
                      
              }  //end of if (id=='buttonsearch02')

              //Ejemplos
              //self.setData(datoscombo,self.options.id,self.options.textTemplate)
              //var $listMesas=$("#list-panel-mesas")[0]
              //console.dir($listMesas.setData)
              //$listMesas.setData(mesas,'list-panel-mesas')
              //#template08.panel-scroll-item
          }
      })
     }
     
 }
 /*
  $(document).on("click","#btn-form-search",function(evt){
            evt.preventDefault();  
            $(".form-search").toggleClass("open-search");        
              
          });
          $(document).on("click","#btn-form-close",function(evt){
         
            $(".form-search").toggleClass("open-search");
            evt.preventDefault();
          });
 */