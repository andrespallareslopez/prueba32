import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'


/*
  podemos utilizar tanto cadenascroll03 como cadenaScroll06React

  Podemos tambien importar el css con instrucciones import
*/

import cadenascroll03 from 'src/shared/templ/scroll03.html!text'

//import 'src/components/panel/04PanelScroll02.css'

const cadenaScroll06React=(
    <my-tab></my-tab>
)
@Component({
   selector:'my-scroll',
   ReactDOM:ReactDOM,
   templateReact:cadenaScroll06React
   //textTemplate: cadenascroll03,
   //cssUrls:['src/components/panel/04PanelScroll02.css']
})
export class webscroll{

    initevent(){
        console.log("estoy en webscroll")
       
    }

}






