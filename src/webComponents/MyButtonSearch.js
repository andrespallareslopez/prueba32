import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'

const cadenabuttonsearchstring = `
<form class="form-search push-float-right" >
  <button id="btn-form-search" class="nav-mobile nav-mobile-search btn-search ripple" >
    <span class="fa fa-search fa-2x" ></span>
  </button>
  <input id="input-search" placeholder="Search..." class="input-search" type="text" />
  <button id="btn-form-close" class="nav-mobile nav-mobile-search btn-search btn-search-close" >
    <span class="fa fa-times fa-2x" ></span>
  </button>
</form>
`

@Component({
    selector:'my-button-search',
    textTemplate: cadenabuttonsearchstring,
    cssUrls:['src/components/search/03search.css']
 })
 export class mybuttonsearch {
      
     initevent(options,id){
         //console.dir(options)
         $("#"+id+" "+"#btn-form-search").on("click",function(evt){
            evt.preventDefault();  
            $("#"+id+" .form-search").toggleClass("open-search"); 
         })
         $("#"+id+" "+"#btn-form-close").on("click",function(evt){
            evt.preventDefault();
            $("#"+id+" "+" .form-search").toggleClass("open-search");
         })
         
     }
     
 }
 /*
  $(document).on("click","#btn-form-search",function(evt){
            evt.preventDefault();  
            $(".form-search").toggleClass("open-search");        
              
          });
          $(document).on("click","#btn-form-close",function(evt){
         
            $(".form-search").toggleClass("open-search");
            evt.preventDefault();
          });
 */