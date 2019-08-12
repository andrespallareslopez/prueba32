import React from 'react'
import ReactDOM from 'react-dom'


import {Component} from 'src/componentsImports/componentDecorator.js'
//import {UXDataList} from 'src/componentsImports/UXDataList.js'

import cadenacombo from 'src/shared/templ/inputcombo01.html!text'

import cadenadatamesas from 'src/shared/templ/datalistmesas.html!text'
import cadenadataarticulos from 'src/shared/templ/datalistarticulos.html!text'

import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

const cadenadatamesasstring = `
<div class="panel-scroll" >
    <div class="panel-scroll-content" >
      <div class="panel-scroll-item" >
        <div class="datalist-container" >
          {{#each mesas}}
          <div class="element-link el ripple" >{{descripcion}}</div>
          {{/each}}
        </div>
      </div>

     </div>
     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>
     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>
 </div>
`
const cadenadataarticulosstring= `
<div class="panel-scroll" >
    <div class="panel-scroll-content" >
      <div class="panel-scroll-item" >
        <div class="datalist-container" >
          {{#each articulos}}
          <div class="element-link el ripple" >{{descripcion}}</div>
          {{/each}}
        </div>
      </div>

     </div>
     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>
     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>
 </div>
`
const cadenacombostring= `
<div id="datalist01" class="datalist" >
  <button id="btn-slide-close01" class="slide-button-panel button-close top-off" >
    <i class="fa fa-close fa-1x"></i>
  </button>
  <div class="panel-datalist" >
    
  </div>
</div>
<div class="group group-block">
  <div class="label-help">
    <span class="logo fa fa-question-circle fa-2x"></span>
    <span class="text">Introduce grupo </span>
  </div>
  <div class="label-input">
    <span class="logo fa fa-tag fa-2x"></span>
    <input id="combotxt" type="text" placeholder="" class="input medium">
    <button id="search" class="list-button"><span class="fa fa-sort-desc"></span></button>
  </div>
</div>
`

@Component({
    selector:'my-combo',
    textTemplate:cadenacombostring,
    cssUrls:['bower/tether/dist/css/tether.css',
    'src/components/panel/04PanelScroll01.css',
    'src/components/list/03datalist01.css'
    ],
    importsUrl:['bower/tether/dist/js/tether.js',
    {url:'src/componentsImports/UXDataList.js',typemodule:'module'},
    {url:'src/componentsImports/UXButtonScroll.js',typemodule:'module'}
    ]
})
export class mycombo{

   initevent(options,id){
     var scroll;
     var datalist;
     //console.log(id);
     datalist=new controls.UXDataList({
        id:id,
        clearContainer:true,
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
}
