requirejs.config({
    paths:{
       jquery:"../../../bower/jquery/dist/jquery.min",
       handlebars:"../../../bower/handlebars/handlebars.min",
       hammer:"../../../bower/hammerjs/hammer.min",
       director:"../../../bower/director/build/director.min",
       value:"values",
       util01:"util01",
       component:"components01",
       text:"../../../bower/text/text",
       css:"../../../bower/require-css/css.min",
       image:"../../../bower/requirejs-plugins/lib/require/image",
       json:"../../../bower/requirejs-plugins/lib/require/json",
       font:"../../../bower/requirejs-plugins/lib/require/font"

    },
    shim:{
        "handlebars":{
           exports:"Handlebars"
        },
        "util01":{
            deps:["handlebars","jquery"],
        }
    }
    
});
var Handlebars;

    require(["jquery",
       "text!../../components/layouts/03layout02/03layout02.css",
       "text!../../../bower/components-font-awesome/css/font-awesome.min.css",
       "text!../../components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css",
       "text!../../components/menu-horizontal/03menu-horizontal01.css",
       "text!../../components/login/03form-login-01.css",
       "text!../../components/header/header01/01animationatom.css",
       "text!../../components/buttons/03buttonmovile01.css",
       "text!../../components/effects/03rippleEffects01.css",
       "text!../../components/forms/03form-basic.css",
       "text!../../components/forms/03form-inputs.css"],
       function($,layout,awesome,menuvertical,menuhorizontal,login,
       headeranimation,buttonsmovile,ripple,formbasic,forminput){
           //console.log(layout);
           $("head").append("<style>"+awesome+"</style>");
           $("head").append("<style>"+layout+"</style");
           $("head").append("<style>"+menuvertical+"</style");
           $("head").append("<style>"+menuhorizontal+"</style>");
           $("head").append("<style>"+login+"</style>");
           $("head").append("<style>"+headeranimation+"</style>");
           $("head").append("<style>"+buttonsmovile+"</style>");
           $("head").append("<style>"+ripple+"</style>");
           $("head").append("<style>"+formbasic+"</style>");
           $("head").append("<style>"+forminput+"</style>");
         

 requirejs(["jquery","handlebars"],function($,Handlebarslib){
   
   $(document).ready(function(){
     
       //console.dir(window);
       //console.dir(Handlebarslib);
       Handlebars=Handlebarslib;
       require(["value","util01",
       "text!../templ/root23.html"],function(valuelib,utillib,temproot){
               //console.dir(util);
               //console.dir(components)
               //console.log(temproot);
               //console.dir(util);
               //console.dir(window.util);
               require(["util01","component"],function(){
                  var container=new components["container"]({
                  container:".container .pages",
                  pathTemplate:"src/shared/templ/",
                  nametemplate:$(".container .pages").data("root")
                });

               });
               
       });
   });
 });
});