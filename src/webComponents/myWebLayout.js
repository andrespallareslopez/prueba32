import {Component} from 'src/componentsImports/componentDecorator.js'

const cadenaweblatoutsstring = `
<header>
    <div class="logo">
        <div class="spinner">
            <div class="ball ball-1"></div>
            <div class="ball ball-2"></div>
            <div class="ball ball-3"></div>
            <div class="ball ball-4"></div>
        </div>
    </div>
    <h1 class="title-application">My Application</h1>
</header>




<div class="main-body">
    <aside id="menuvertical" class="menu-area">
        <my-menu-vertical-01 id="menu-vertical02"></my-menu-vertical-01>
    </aside>
    <div id="root" class="wrapper page root">

        <div class="nav">
            
            <nav data-behavior="navButtons03layout02">
                <my-nav></my-nav>
                <my-menu-horizontal-01></my-menu-horizontal-01>
                
                <!--
                <form id="frmlogin01" class="form-login-01">
                    <h1 class="title">Please Login</h1>
                    <div class="frm-Background">
                        <div class="group">
                            <div class="label"><span class="fa fa-user fa-2x"></span></div>
                            <input type="text" placeholder="User" class="input">
                        </div>
                        <div class="group">
                            <div class="label"><span class="fa fa-unlock-alt fa-2x"></span></div>
                            <input type="text" placeholder="Password" class="input">
                        </div>
                        <div class="group">
                            <input type="checkbox" class="remember"><label class="title-remember">Remember me</label>
                        </div>
                        <button class="btn-login ripple"><span>Login</span></button>
                    </div>
                </form>
                -->
            </nav>
            
        </div>

        <div class="main">
            <main>
                <div class="content" data-template="scroll02" data-action="panelform01" >
                 <my-scroll></my-scroll>
                 <!--
                    <div class="panel-scroll-01">
                        <div class="panel-scroll-content">
                            <div class="panel-scroll-item">
                              
                            </div>
                        </div>
                        <button id="btn-slide-up" class="slide-button-panel top"><i class="fa fa-chevron-up fa-2x"></i></button>
                        <button id="btn-slide-down" class="slide-button-panel bottom"><i class="fa fa-chevron-down fa-2x"></i></button>
                    </div>
                   -->

                </div>
            </main>
        </div>

        <div class="footer">
            <footer>
              <!--  
              <div class="push-center-inner push-center-3x">
                 <button id="btn-ok" class="nav-mobile nav-2x push-float-left ripple">
                  <span class="fa fa-check-circle fa-2x" ></span>
                  <span class="title" >Aceptar</span>
                 </button>

                 <button id="btn-cancel" class="nav-mobile nav-2x push-float-right ripple">
                  <span class="fa fa-times-circle fa-2x" ></span>
                  <span class="title" >Cancelar</span>
                 </button>
              </div>
              -->
            </footer>
        </div>

    </div>

</div>
`

 @Component({
    //container:".container .pages",
    selector:'my-layout',
    textTemplate: cadenaweblatoutsstring,
    cssUrls:[ 'src/components/layouts/03layout02/03layout02.css',
              'src/components/layouts/03layout02/03transition02.css',
              'src/components/effects/03rippleEffects01.css'          
            ],
    importsUrl:[    
    "bower/mousetrap/mousetrap.min.js",
    "node_modules/inputmask/dist/inputmask/inputmask.js",
    "bower/hammerjs/hammer.min.js",
    "src/shared/js/behaviors03layout02.js"
    
    ]  
  })
  export class weblayout{}