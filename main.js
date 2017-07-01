
requirejs.config({
    paths:{
       jquery:"bower/jquery/dist/jquery.min",
       handlebars:"bower/handlebars/handlebars.amd.min",
       hammer:"bower/hammerjs/hammer.min",
       director:"bower/director/build/director.min",
       hashtable:"bower/jshashtable/hashtable",
       promise:"bower/promise-polyfill/promise.min",
       mutationobserver:"bower/MutationObserver-shim/dist/mutationobserver.min",
       es5:"bower/es5-shim/es5-shim.min",
       values:"src/shared/js/values",
       util01:"src/shared/js/util01",
       component:"src/shared/js/components01",
       componentscroll:"src/components/menu-vertical/componentsMenuVerticalScroll01",
       mousetrap:"bower/mousetrap/mousetrap.min",
       inputmask:"bower/Inputmask/dist/inputmask/inputmask",
       inputmaskdeplib:"bower/Inputmask/dist/inputmask/inputmask.dependencyLib",
       inputmaskdate:"bower/Inputmask/dist/inputmask/inputmask.date.extensions",
       inputmaskext:"bower/Inputmask/dist/inputmask/inputmask.extensions",
       inputmasknum:"bower/Inputmask/dist/inputmask/inputmask.numeric.extensions",
       inputmaskphone:"bower/Inputmask/dist/inputmask/inputmask.phone.extensions",
       inputmaskregex:"bower/Inputmask/dist/inputmask/inputmask.regex.extensions",
       table:"src/components/Table/table01",
       behaviors:"src/shared/js/behaviors",
       behaviors03layout02:"src/shared/js/behaviors03layout02",
       text:"bower/text/text",
       //css:"bower/require-css/css",
       image:"bower/requirejs-plugins/lib/require/image",
       json:"bower/requirejs-plugins/lib/require/json",
       font:"bower/requirejs-plugins/lib/require/font",
       propertyparser:"bower/requirejs-plugins/lib/require/propertyParser"
    },
    map:{
        "*":{
            css:"bower/require-css/css",
            font:"bower/requirejs-plugins/src/font",
            propertyparser:"bower/requirejs-plugins/src/propertyParser"
        }
    },
    shim:{
        "handlebars":{
           exports:"Handlebars"
        },
        "hammer":{
            exports:"Hammer"
        },
        "util01":{
            deps:["values","handlebars","jquery","hammer","promise"],
        },
        "component":{
            deps:["es5","util01","behaviors","behaviors03layout02","promise","mutationobserver"]
        },
        "inputmask":{
            deps:["inputmaskdeplib"]
        },
        "inputmaskdate":{
            deps:["inputmask"]
        },
        "inputmaskext":{
            deps:["inputmask"]
        }, 
        "inputmasknum":{
            deps:["inputmask"]
        },
        "inputmaskphone":{
            deps:["inputmask"]
        },
        "inputmaskregex":{
            deps:["inputmask"]
        },
        "table":{
            deps:["hashtable","mousetrap","inputmask","inputmaskdate",
            "inputmaskext","inputmasknum",
            "inputmaskphone","inputmaskregex"]
        }
    }
});

    //con font-awesome hay que tener cuidado porque depende de fonts de la carpeta fonts, hay que copiarla
    // y ponerla en el raiz de la aplicacion.
    //var Handlebars;

    require([
       
        "jquery","values","util01","component","table","componentscroll",
        "css!src/components/layouts/03layout02/03layout02.css",
        "css!font-awesome.css",
        
        "css!src/components/menu-vertical/03Menu-vertical01/03Menu-vertical01.css",
        "css!src/components/menu-horizontal/03menu-horizontal01.css",
        "css!src/components/login/03form-login-01.css",
        "css!src/components/header/header01/01animationatom.css",
        "css!src/components/buttons/03buttonmovile01.css",
        "css!src/components/effects/03rippleEffects01.css",
        "css!src/components/forms/03form-basic.css",
        "css!src/components/forms/03form-inputs.css",
        "css!src/components/Table/table01.css",
        "text!src/shared/templ/root23.html"],
        function($,values,util,component,table01,componentscroll,layout,
        awesome,
        menuvertical,menuhorizontal,login,
        headeranimation,buttonsmovile,ripple,formbasic,forminput,table,temproot){
           
            var font=new FontFaceObserver("FontAwesome");
            font.load().then(function(){
                console.log("fuente cargada");
                //$("#loader02").find(".wf-no-active").removeClass("wf-no-active");
                
            },function(){
                console.log("fuente no disponible");
            });
            $("head").append("<style>"+awesome+layout+menuvertical+menuhorizontal+login+headeranimation+buttonsmovile+ripple+formbasic+forminput+table+"</style>");
            
            require(["jquery","handlebars"],function($,Handlebarslib){
            
            $(document).ready(function(){
            
            
            
            require(["component",
                "text!src/shared/templ/root23.html"],function(component,temproot){
                    
                    //container.config.renderName="renderTemplareRaw";  //importante poner en este caso 
                                                 // esta asignacion cambiamos
                                                //la forma de renderizar el template
                    
                    var container=new components.container({
                    container:".container .pages", // antes .container .pages
                    pathTemplate:"src/shared/templ/",
                    //nametemplate:$(".container .pages").data("root")  //antes .container .pages
                    textTemplate:temproot
                   },{
                      renderName:"renderTemplateRaw"
                   }); 
                   
                    container.promise.then(function(mutation){
                        $("#loader02").remove();
                         
                        
                        
                        behaviors.navbuttonsactionsroot02();
                        behaviors.menuhorizontal01({});
                        behaviors.menuvertical01({
                            nameid:"#menu-vertical02",
                            containerComponent:".menu-vertical01"
                        });
                        require(["componentscroll"],function(){
                            var scrollmenu=new components.menuVerticalScroll({
                            nameid:"#menu-vertical02",
                            containerComponent:".menu-vertical01"
                            });
                            scrollmenu.initevent();
                        });
                        require(["table"],function(){
                        
                        var datos=[
                            {producto:"fanta",email:"andres_pallares@hotmail.com",mes:1,fecha:"21/02/2013",time:"02:50",cnt:2.00,precio:1.20},
                            {producto:"cafe",email:"andrespallares4@gmail.com",mes:3,fecha:"11/05/2015",time:"03:15",cnt:1,precio:1.00},
                            {producto:"coca-cola",email:"loj@ciklum.com",mes:5,fecha:"03/03/2016",time:"12:00",cnt:1,precio:1.50},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},
                            {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",time:"11:14",cnt:1,precio:0.60},

                            ];
                            var table=new components.table({
                            nameid:"table01",
                            container:".container .pages .content",
                            fields:[
                                    {name:"producto",caption:"Producto",type:"string",
                                    sort:function(a){return a.toUpperCase();},width:"20%",required:true},
                                    //{name:"fecha",caption:"Fecha",type:"datestring",align:"left",width:"15%"},
                                    {name:"email",caption:"E-mail",type:"mask",width:"25%",alias:"email",subtype:"email"},
                                    {name:"mes",caption:"Mes",type:"integerstring",width:"5%",length:3},
                                    {name:"fecha",caption:"Fecha",type:"mask",align:"left",width:"15%",
                                    subtype:"date",required:true},
                                    {name:"time",readonly:true,caption:"Time",type:"mask",width:"5%",align:"center",subtype:"time"},
                                    {name:"cnt",caption:"Cantidad",type:"decimalstring",align:"center",width:"5%",min:1},
                                    {name:"precio",caption:"Precio",type:"mask",align:"center",width:"15%",
                                    min:1,max:500,mask:"[0-9]+(\.[0-9][0-9]?)?",alias:"Regex",
                                    subtype:"decimal",toFixed:2,
                                    sort:function(a){return a;}},
                                    {name:"total",caption:"Total",type:"decimal",
                                    computed:function(dato){

                                        return ((dato.cnt && dato.precio) ? (dato.cnt*dato.precio):undefined);},
                                    align:"right",width:"25%",
                                    sort:function(a){return a;}
                                    }
                            ],
                            data:datos
                        });
                        
                        });
                }); 
            }); //end require component
            
        });  //end jquery ready
    });
   });

  