import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

const cadenamenuhorizontalstring = `
    <ul id="menuhorizontal01" class="menu-horizontal">
    <li class="parent element pr"><a class="element-link gr ripple" href="#">Link 1<span class="fa fa-chevron-right push-float-right" ></span></a>
        <div class="sub-menu sb">
            <a class="back-element bk ripple" href="#"><span class="fa fa-chevron-left push-float-left" ></span>Back</a>
            <a class="element-link el ripple" href="#/template1">SubLink 1</a>
            <a class="element-link el ripple" href="#/template2">SubLink 2</a>
            <a class="element-link el ripple" href="#/template3">SubLink 3</a>
            <a class="element-link el ripple" href="#/template4">SubLink 4</a>
            <a class="element-link el ripple" href="#/template5">SubLink 5</a>
        </div>
    </li>
    <li class="element item itm"><a class="element-link el ripple" href="#/template6">Link 2</a></li>
    <li class="parent element pr"><a class="element-link gr ripple" href="#">Link 3<span class="fa fa-chevron-right push-float-right" ></span></a>
        <div class="sub-menu sb">
            <a class="back-element bk ripple" href="#"><span class="fa fa-chevron-left push-float-left" ></span> Back</a>
            <a class="element-link el ripple" href="#/template7">SubLink 1</a>
            <a class="element-link el ripple" href="#/template8">SubLink 2</a>

        </div>
    </li>
    <li class="element item itm"><a class="element-link el ripple" href="#/template12">Link 4</a></li>

    </ul>
`
@Component({
    selector: 'my-menu-horizontal-01',
    textTemplate: cadenamenuhorizontalstring,
    cssUrls:[  'src/components/menu-horizontal/03menu-horizontal01.css']    
})
export class mymenuhorizontal {
  
  initevent(options,id){
   
  }

}