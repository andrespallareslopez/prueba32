import React from 'react'
import ReactDOM from 'react-dom'

import {Component} from 'src/componentsImports/componentDecorator.js'


import { appendToContainer,recreateNode,removeContainer } from "src/componentsImports/utilContainer.js";

const cadenapagestring = `
<div  class="wrapper page child" >
    <div class="nav" >
        <nav  >
           <button type="button" id="btn-toggle-back-3" class="nav-mobile push-float-left ripple" data-bind-style="display:cadena" data-bind-on="click:onClick" >
             <span class="fa fa-chevron-left" ></span>
             <span class="texto-btn"  > Back</span>
           </button>
        </nav>
    </div>  
    <div class="main" >
       <main>
          <div class="box content"  >
            <div id="loader02" class="loader-progress-01 splash-panel" >
             <div class="loading">
                <div class="icon-loader sk-fading-circle">
                    <div class="sk-circle1 sk-circle"></div>
                    <div class="sk-circle2 sk-circle"></div>
                    <div class="sk-circle3 sk-circle"></div>
                    <div class="sk-circle4 sk-circle"></div>
                    <div class="sk-circle5 sk-circle"></div>
                    <div class="sk-circle6 sk-circle"></div>
                    <div class="sk-circle7 sk-circle"></div>
                    <div class="sk-circle8 sk-circle"></div>
                    <div class="sk-circle9 sk-circle"></div>
                    <div class="sk-circle10 sk-circle"></div>
                    <div class="sk-circle11 sk-circle"></div>
                    <div class="sk-circle12 sk-circle"></div>
                </div>
             </div>
            </div>
          </div>
       </main>
    </div>
    <div class="footer">
        <footer  >
        <div class="push-center-inner push-center-inline-3x">
            <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">
            <span class="fa fa-check-circle fa-2x" ></span>
            <span class="title" >Aceptar</span>
            </button>
        
            <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">
            <span class="fa fa-times-circle fa-2x" ></span>
            <span class="title" >Cancelar</span>
            </button>
          
    </div>
    <my-panel-scroll-popup id='popup02'></my-panel-scroll-popup>       
            

        </footer>
    </div>
`

const cadenaspinnerstring01=`
    <div class="lds-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
`

const cadenaspinnerstring02 = `
    <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
`
const cadenaspinnerstring03 =`
<div class="icon-loader sk-fading-circle">
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
</div>
`
@Component({
    selector: 'my-page-load-spinner-01',
    textTemplate: cadenapagestring,
    cssUrls:[ 'src/components/loaders/loaders02/04loader-progress-01.css',
              'src/components/loaders/loaders01/04logospinners.css',
              'src/components/loaders/loaders03/spinner.css',
              'src/components/loaders/loaders04/spinner.css',
              'src/components/loaders/loaders05/spinner.css'
            ]
})
export class mypageloadspinner{
    initevent(options,id){
        
        
    }
}

