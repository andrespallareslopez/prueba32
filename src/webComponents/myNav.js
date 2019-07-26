import {Component} from 'src/componentsImports/componentDecorator.js'
import cadenanav from 'src/shared/templ/nav01.html!text'

@Component({
    selector:'my-nav',
    textTemplate:cadenanav,
    cssUrls:['src/components/buttons/03buttonmovile01.css'],
    importsUrl:[ "src/shared/js/behaviors03layout02.js"]
 })
 export class Nav {
     initevent(options){
         //console.dir(options)
         console.log("estoy en initevent en nav")
         //console.dir(window.behaviors)
         window.behaviors.navButtons03layout02()
     }
 }

