import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaSlidePerspective from 'src/components/slides/slide04perspective.html!text'

@Component({
    selector:'my-slide-perspective',
    textTemplate:cadenaSlidePerspective,
    cssUrls:['src/components/slides/04slide-Perspective01.css'] ,
    importsUrl:['src/componentsImports/componentsSlidePerspective.js']
 })
export class myslidePerspective{
    initevent(options,id){
        var slidep=new controls.slidePerspective()
    
    }
}