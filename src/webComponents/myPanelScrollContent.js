import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenascroll from 'src/shared/templ/scroll01.html!text'

import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

@Component({
    selector:'my-panel-scroll-content',
    textTemplate:cadenascroll,
    cssUrls:['src/components/panel/04PanelScroll02.css'],
    importsUrl:[
        {url:'src/componentsImports/UXScroll.js',typemodule:'module'}, 
        {url:'src/componentsImports/UXPanelScroll.js',typemodule:'module'}]
})
export class mypanelscrollcontent{

    initevent(options,id){
        
        //console.log("estoy en mypanelscrollcontent")
        //console.log("id :"+id)
        if (id=="panelMesas"){
            //mylistgrpbuttons.setData(mesas)
            var panelmesasReact=(
                <my-list-grp-buttons id="list-panel-mesas"></my-list-grp-buttons>
            )
            var myPanelMesas = new components.container({
                container:'#tabMesas .panel-scroll-item',
                ReactDOM:ReactDOM,
                templateReact:panelmesasReact  
            }) 
            myPanelMesas.initevent=function(options,id){
                //console.log("estoy en Panel mesas")
                //console.log("panelMesas Id:"+id)
                //mylistgrpbuttons.options.data=mesas
                var $listMesas=$("#list-panel-mesas")[0]
                //console.dir($listMesas.setData)
                $listMesas.setData(mesas,'list-panel-mesas')
                //mylistgrpbuttons.setData(mesas,'list-panel-mesas')
                //$('#list-panel-mesas')[0].render(mylistgrpbuttons.options.templateReact,mesas)
            }
            
            myPanelMesas.create=function(){
                //console.log(id)
                //console.log("estoy en panelMesas create")
                    
                    var panel=new controls.UXPanelScroll({
                        id:id,
                        item:".list-grp-buttons .list-grp-content-top"
                    })
                
                
            }
        } else if (id=="panelArticulos"){
            //mylistgrpbuttons.setData(articulos)     
            var panelArticulosReact=(
                <my-list-grp-buttons id="list-panel-articulos"></my-list-grp-buttons>
            )
            var myPanelArticulos=new components.container({
                container:'#tabArticulos .panel-scroll-item',
                ReactDOM:ReactDOM,
                templateReact:panelArticulosReact
            })
            myPanelArticulos.initevent=function(options,id){
                //console.log("estoy en panel Articulos")
                //console.log("panelArticulos Id:"+id)
                //mylistgrpbuttons.options.data=articulos
                //console.dir(mylistgrpbuttons)
                var $listArticulos=$('#list-panel-articulos')[0]
                $listArticulos.setData(articulos,'list-panel-articulos') 
                //mylistgrpbuttons.setData(articulos,'list-panel-articulos')                                       
                //$('#list-panel-articulos')[0].render(mylistgrpbuttons.options.templateReact,articulos)
                //console.dir(mylistgrpbuttons)
                
            }
            myPanelArticulos.create=function(){
                //console.log("estoy en panelArticulos create")
                
                var panel=new controls.UXPanelScroll({
                  id:id,
                  item:".list-grp-buttons .list-grp-content-top"
                })
            }
        }
    }
}