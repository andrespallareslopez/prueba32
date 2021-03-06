import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaTabs01 from 'src/shared/templ/Tabs01.html!text'


const cadenatabsstring= `
  <div class="tab-container" >
      <div class="tab-controls">
            <a class="ripple" href="#" >Mesas</a>
            <a class="ripple" href="#" >Categorias</a>
            <a class="ripple" href="#" >Articulos</a>
            <a class="ripple" href="#" >Comandas</a>
      </div>  
      <div class="tab-items" >
        
              <ul class="tab-container-items">
                      <li class="tab-item" id="tabMesas" name-container="Mesas">
                        <my-panel-scroll-content id="panelMesas"></my-panel-scroll-content>
                      </li>
                      <li class="tab-item" id="tabCategorias" name-container="Categorias">
                          <my-slide-panel id="panelCategorias"></my-slide-panel>
                      </li>
                      <li class="tab-item" id="tabArticulos" name-container="Articulos">
                          <my-panel-scroll-content id="panelArticulos"></my-panel-scroll-content>
                      </li>
                      <li class="tab-item" id="tabComandas" name-container="Comandas">
                            <my-form id="panelComandas" ></my-form>
                      </li>     
                    </ul>    
      
    </div>
`

@Component({
    selector:"my-tab",
    textTemplate:cadenatabsstring,
    cssUrls:['src/components/tabs/tabs01.css'],
    importsUrl:['src/componentsImports/componentstabcontainer.js']
})
export class myTabs01{
  initevent(options,id){
   //console.dir(controls) 
   var tabs=new controls.tab()
   
  }      
}
