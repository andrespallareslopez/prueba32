import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'
  /*
      podemos trabajar tanto con templates react como
      con cadena de texto
  */
 import cadenaSlidePanel from 'src/components/slides/slide01.html!text'

/*
  en el hueco que se ve con el div className="slide-items" ahi es donde
  se va a inyectar los paneles .
*/
 const slidePanelContainerReact=(
    <div className="slide-container">
       <button className="slide-button left">
         <i className="fa fa-chevron-left fa-2x" ></i>
       </button>
       <div className="slide-items">
        
       </div>
       <button className="slide-button right">
         <i className="fa fa-chevron-right fa-2x"></i>
       </button>
    </div>
 )

 @Component({
    selector:"my-slide-panel",
    ReactDOM:ReactDOM,
    templateReact:slidePanelContainerReact,
    //textTemplate:cadenaSlidePanel,
    cssUrls:['src/components/slides/04slide-container.css',
    'src/components/list/03List-group-buttons.css'
      ],
    importsUrl:['bower/hammerjs/hammer.min.js',
        {url:'src/componentsImports/componentsslidePanels.js',typemodule:'module'}]  
})
export class mySlidePanel{

    initevent(options,id){
        console.log("estoy dentro de slidepanel")
        console.dir(options)
        var self=this
        if (id=="panelCategorias"){
            /******************************** */
            /* le pongo un timerout para que le tiempo */
            /* a calcular bien la anchura, para que le de tiempo
            este componente tiene este problema, captura el
            evento resize y calcula, ajusta el tamaño de los
            cuadros pero en una primera carga, puede encontrarse
            con height y width mas pequeños de lo normal
            */
        var mytimer=setTimeout(function(){
            DrawPanelReactDetail("categoria",self,categorias,id);
        },350)
        }   
    }

}

function DrawPanelReactDetail(nameDescription,self,datos,id){
    var slidePanelDetailReact=function(self,nameDescripcion){
        //console.log(nameDescripcion)
        return  (<ul className="slide-container-items">
               {
               self.sizes.pages.map(function(page,index){     
                 return  <li className="slide-item" key={index}>
                       <div className="list-grp-buttons list-center">
                       {
                           page.slides.map(function(slide,index){                                 
                           //console.dir(slide);
                           return (
                            <a className="list-grp-button box-shadow-3" key={index}  data-codigo={slide.codigo} href="#"  >
                             <div className="list-grp-content-top" >
                              <span className="list-grp-content-text list-grp-context-text-center" >{slide[nameDescripcion]}</span>
                             </div>  
                            </a>
                              );
                           })
                       }
                   </div>
                   </li>
                  })
               } 
           </ul>);
       }
       
       var myslidePanelDetail=new new components.container({
           container:".slide-container .slide-items",
           ReactDOM:ReactDOM,
           nameDescription:nameDescription,
           data:datos,
           templateReact:slidePanelDetailReact
           //textTemplate:cadenaSlidePanelDetail
       })
       //no podemos utilizar en el slidePaneld el initevent, ya 
       //se utiliza internamente, si lo ponemos sobreescribiremos
       //el que hay y el componente dejara de funcionar
       myslidePanelDetail.create(function(options){
        var self=this   
        //console.log("estoy dentro de slide panel detail")
        //console.log(id)
        //en jquery hay que poner el # delante para detectar el id element
           $("#"+id+" a.list-grp-button").on("click",function(e){
               e.preventDefault()
               //console.dir(this)
               //console.dir(e.target)
               console.log($(this).data("codigo"))
               var codigo=$(this).data("codigo")
               var url='http://185.194.60.156:8085/datasnap/rest/TServerMethods1/GetArticulos/'+codigo
               
               $.ajax({
                   url:url
                }).done(function(result){
                    //console.dir(result)
                    var result=JSON.parse(result)
                    var articulos=result.items
                    console.dir(articulos)
                    
               }).fail(function(e){
                  console.dir(e.error)
               }).always(function(){
                 
               })

           })
       })
       
}

