import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaTabs01 from 'src/shared/templ/Tabs01.html!text'





@Component({
    selector:"my-tab",
    textTemplate:cadenaTabs01,
    cssUrls:['src/components/tabs/tabs01.css'],
    importsUrl:['src/componentsImports/componentstabcontainer.js']
})
export class myTabs01{
  initevent(options,id){
   //console.dir(controls) 
   var tabs=new controls.tab()
   
  }      
}
