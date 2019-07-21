/// <reference path="./main.d.ts" />

$(document).ready(function(){
    //var container=".container .pages";
    /*
    webshim.setOptions('forms-ext', {
      replaceUI: 'auto',
      widgets:{
          popover:{
              inline:false,
              appendTo:"element"
          }
      }
    });
    */
    //webshims.activeLang("es");
    
    //webshims.polyfill('forms forms-ext');
    
    if ($(".container .pages").data("root")){
       
       var container=new components["container"]({
         container:".container .pages",
         pathTemplate:"src/shared/templ/",
         nametemplate:$(".container .pages").data("root")
       });
       
       container.promise.then(function(mutation){

            behaviors["navbuttonsactionsroot02"]();
            behaviors["menuhorizontal01"]({});
            behaviors["menuvertical01"]({
                nameid:"#menu-vertical02",
                containerComponent:".menu-vertical01"
            });
            var scrollmenu=new components.menuVerticalScroll({
                   nameid:"#menu-vertical02",
                   containerComponent:".menu-vertical01"
                });
            scrollmenu.initevent();
            var datos=[
                {producto:"fanta",email:"andres_pallares@hotmail.com",mes:1,fecha:"21/02/2013",cnt:2.00,precio:1.20},
                {producto:"cafe",email:"andrespallares4@gmail.com",mes:3,fecha:"11/05/2015",cnt:1,precio:1.00},
                {producto:"coca-cola",email:"loj@ciklum.com",mes:5,fecha:"03/03/2016",cnt:1,precio:1.50},
                {producto:"Copa de vino",email:"microsoft@soft.es",mes:2,fecha:"04/05/2014",cnt:1,precio:0.60}
            ];
            var table=new components.table({
                nameid:"table01",
                container:".container .pages .content",
                fields:[
                    {name:"producto",caption:"Producto",type:"string",
                    sort:function(a){return a.toUpperCase()},width:"25%",required:true},
                    //{name:"fecha",caption:"Fecha",type:"datestring",align:"left",width:"15%"},
                    {name:"email",caption:"E-mail",type:"mask",width:"20%",alias:"email",subtype:"email"},
                    {name:"mes",caption:"Mes",type:"integerstring",width:"15%",length:3},
                    {name:"fecha",caption:"Fecha",type:"mask",align:"left",width:"15%",
                    subtype:"date",required:true},
                    {name:"cnt",caption:"Cantidad",type:"decimalstring",align:"center",width:"10%",min:1},
                    {name:"precio",caption:"Precio",type:"mask",align:"center",width:"15%",
                    min:1,max:500,mask:"[0-9]+(\.[0-9][0-9]?)?",alias:"Regex",
                    subtype:"decimal",toFixed:2,
                    sort:function(a){return a}},
                    {name:"total",caption:"Total",type:"decimal",
                    computed:function(dato){return dato.cnt*dato.precio},
                    align:"right",width:"15%",
                    sort:function(a){return a;}
                    }
                ],
                data:datos
            });
       });   
    } //end if 
    
});

