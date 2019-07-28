import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaslide from 'src/components/slides/slide01.html!text'

const slideReact=(
    <div className="slide-container">
       <button className="slide-button left">
         <i className="fa fa-chevron-left fa-2x" ></i>
       </button>
       <div className="slide-items">
         <ul className="cf" >
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
         </ul>
       </div>
       <button className="slide-button right">
         <i className="fa fa-chevron-right fa-2x"></i>
       </button>
       <div className="slide-controls"></div>
    </div>
)
@Component({
   selector:'my-slide',
   ReactDOM:ReactDOM,
   templateReact:slideReact,
   //textTemplate:cadenaslide,
   cssUrls:['src/components/slides/04slide-container.css',
   'src/components/list/03List-group-buttons.css'],
   importsUrl:['bower/hammerjs/hammer.min.js',
               'src/componentsImports/componentsslidecontainer.js'
   ]
})  
export class myslide{
    initevent(options,id){

        //Si no definimos esto no saldra el panel
        //dibujado sus elementos li porque
        //hemos puesto por defecto que salga
        //oculto hasta que no inicializemos
        //el slide.
        var slide=new controls.slide() 
    }
    resize(){
      console.log("Estoy en resize de mySlide")
      
    }
}