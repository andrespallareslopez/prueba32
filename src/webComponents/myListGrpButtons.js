import React from 'react'
import ReactDOM from 'react-dom'

import {components,Container} from 'component'

import {Component} from 'src/componentsImports/componentDecorator.js'

const scrollPanelContentReact=function(data,nameDescripcion){
    return   <div className="list-grp-buttons space-top-1x">
             {
                data.map(function(value,index){
                    return (
                        <a className="list-grp-button box-shadow-3" href="#" key={index} >
                          <div className="list-grp-content-top" >
                           <span className="list-grp-content-text list-grp-context-text-center" >{value[nameDescripcion]}</span>
                          </div>  
                        </a>
                       );
                })
             } 
             </div>

}

@Component({
    selector: 'my-list-grp-buttons',
    ReactDOM:ReactDOM,
    //data:mesas,
    nameDescription:"descripcion",
    templateReact: scrollPanelContentReact,
    cssUrls:[ 'src/components/list/03List-group-buttons.css']
    
})
export class mylistgrpbuttons {
  
  initevent(options,id){
    //console.log("Estoy en list grp buttons")
    //console.dir(this.setData)
    //console.log(id)
    
  }

  reloaddata(options,id){
    //console.log("estoy en reload list grp buttons")
    //console.log(id)
  }
  
}

