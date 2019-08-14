import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import {mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

import cadenabusqueda from 'src/shared/templ/inputbusqueda01.html!text'

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

const cadenadatagruposstring= `
<div class="panel-scroll" >
    <div class="panel-scroll-content" >
      <div class="panel-scroll-item" >
        <div class="datalist-container" >
          {{#each grupos}}
          <div class="element-link el ripple" >{{description}}</div>
          {{/each}}
        </div>
      </div>

     </div>
     <button id="btn-slide-up" class="slide-button-panel small-button top" ><i class="fa fa-chevron-up fa-1x"></i></button>
     <button id="btn-slide-down" class="slide-button-panel small-button bottom" ><i class="fa fa-chevron-down fa-1x"></i></button>
 </div>
`

const cadenabusquedastring = `
<div id="datalist01" class="datalist" >
  <button id="btn-slide-close01" class="slide-button-panel button-close top-off" >
    <i class="fa fa-close fa-1x"></i>
  </button>
  <div class="panel-datalist" >
    
  </div>
</div>
<div class="group group-block">
    <div class="label-input">
    <span class="logo fa fa-tag fa-2x"></span>
    <input type="text" autocomplete="off" id="busquedatxt" placeholder="Busqueda" class="input medium">
    <button  id="search" class="list-button"><span class="fa fa-search" ></span></button>
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
    {url:'src/componentsImports/UXSearchList.js',typemodule:'module'},
    'bower/linqjs/linq.js'
    ]
})
export class mysearch{
    initevent(options,id){
        console.log('estoy en mysearch con id:' +id)
        //console.dir(Enumerable)
        var scroll;
        var datalist;
         
        datalist=new controls.UXSearchList({
            id:id,
            clearContainer:true,
            
            data:(function(id){
             if (id=="search01")    
              return   datos
             else if(id=="search02")
               return {mesas:mesas}
            })(id),
            
            
            textTemplate:(function(id){
               if (id=="search01")
                 return cadenadatagruposstring
               else if (id=="search02")
                 return cadenadatamesas
            })(id),
            
            onButtonClick:function(options){
                console.log('estoy en onbuttonclick search01')
                if (id=="search01"){
                    //console.log('estoy en onbuttonclick search01')
                    /* no es necesario poner cadenadatagruposstring
                    se podria llamar de la siguiente manera:
                    datalist.setData(datos,id)
                    */ 
                    //datalist.setData(datos,id,cadenadatagruposstring)
                    datalist.setData(datos,id)
                  }
                else if(id=="search02")
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
            onSearch:(datos,value,id)=>{
                var datoscombo=Enumerable.from(datos.grupos)
                .where(
                    (grupo)=>{
                        return grupo.description.includes(value)==true
                     })
                 .select("$").toArray()
                 console.dir(datoscombo)
                 return {grupos:datoscombo}
            },
            onClose:function(){
              if (scroll)
                scroll.destroy();
            }
        })

    }
}

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