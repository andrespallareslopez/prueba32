import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

import cadenabusqueda from 'src/shared/templ/inputbusqueda01.html!text'

const cadenabusquedastring = `
<div class="group group-block">
    <div class="label-input">
    <span class="logo fa fa-tag fa-2x"></span>
    <input type="text" autocomplete="off" id="busquedatxt" placeholder="Busqueda" class="input medium">
    <button type="button" id="search" class="list-button"><span class="fa fa-search"></span></button>
    </div>
</div>
`

 @Component({
    selector: 'my-search',
    textTemplate:cadenabusquedastring,
    cssUrls:['bower/tether/dist/css/tether.css',
    'src/components/panel/04PanelScroll01.css',
    'src/components/list/03datalist01.css'
    ],
    importsUrl:['bower/tether/dist/js/tether.js',
    {url:'src/componentsImports/UXDataList.js',typemodule:'module'},
    {url:'src/componentsImports/UXButtonScroll.js',typemodule:'module'},
    'bower/linqjs/linq.js'
    ]
})
export class mysearch{
    initevent(options,id){
        console.log('estoy en mysearch con id:' +id)
        //console.dir(Enumerable)



    }
}
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
/*
 $("#input-search").on("keydown",function(e){
          if ( !$(".form-search").hasClass("open-progress")){
             $(".form-search").addClass("open-progress"); 
          }  
        });
        $("#input-search").on("keyup", debounce(function (e) {
          //console.dir(e);
          //console.dir($("#input-search").val());
          values.router.setRoute("/grupos/grupobySearch/"+$("#input-search").val());
          $(".form-search").removeClass("open-progress");
          
        },300));
*/
/*
    var onLoadProductsSlider=function(path){
          p1=util.http.get(values.host+path);
          
           p1.then(function(result){
               //resultdata=result;
              $(".wrapper.root .content .slide-container .slide-items").empty();
              //$(".wrapper.root .content .slide-container .slide-items ul").remove();  
              //behaviors.destroyEventsSlidePanel({});
              //console.dir(result);
              if (slidesp){
                console.log("objecto slide ya creado");
               // console.dir(slidesp.options.fncreate);
                slidesp.render(result,"reload"); 
              }else{
                slidesp=new components.slidePanels({
                 container:".wrapper.root .content .slide-container .slide-items",
                 data:result,
                 nametemplate:"slide03"
                });
              }  
           });
    }
*/