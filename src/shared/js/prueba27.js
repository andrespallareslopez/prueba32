/// <reference path="./main.d.ts" />

$(document).ready(function () {
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
    FastClick.attach(document.body);
    //Este helper de handlebars se utiliza para paginacion   
    Handlebars.registerHelper('isSelected', function (index, value) {
        //console.log(value);
        //console.log(index);
        return index == value ? 'current' : '';
    });


    if ($(".container .pages").data("root")) {
        
        var container = new components["container"]({
            container: ".container .pages",
            pathTemplate: "src/shared/templ/",
            nametemplate: $(".container .pages").data("root")
        });
        
        container.promise.then(function (mutation) {
            
            behaviors["navbuttonsactionsroot02"]();
            behaviors["menuhorizontal01"]({});
            behaviors["menuvertical01"]({
                nameid: "#menu-vertical02",
                containerComponent: ".menu-vertical01"
            });
            var scrollmenu = new components.menuVerticalScroll({
                nameid: "#menu-vertical02",
                containerComponent: ".menu-vertical01"
            });
            scrollmenu.initevent();
             
            /*
            var scrollPanel=new components.panelScroll({
               nameid:"#root ",
               container:".main .content",
               containerComponent:".panel-scroll-01",
               //scroll:".panel-scroll-content",
               //items:".panel-scroll-item",
               item:".list-collection li"
               //btnup:"#btn-slide-up",
               //btndown:"#btn-slide-down",
               //fnClickElement:clickElementAccordion
            });
            scrollPanel.initevent();
            */
            /*
            var pageindex=0;
            var pagerow=5;
            var datos={
                grupos:[{codgrupo:1,description:"Bebida"},
                        {codgrupo:2,description:"Pan"},
                        {codgrupo:3,description:"Carne"},
                        {codgrupo:4,description:"Pescado"},
                        {codgrupo:5,description:"Botes"},
                        {codgrupo:6,description:"Vinos"},
                        {codgrupo:7,description:"Refrescos"},
                        {codgrupo:8,description:"Bolleria"},
                        {codgrupo:9,description:"Dulces"},
                        {codgrupo:10,description:"Frutas"},
                        {codgrupo:11,description:"Bizcochos"},
                        {codgrupo:12,description:"Pucheros"},
                        {codgrupo:13,description:"Tortas"},
                        {codgrupo:14,description:"Grano"},
                        {codgrupo:15,description:"Pastas"},
                        {codgrupo:16,description:"Ensaladas"},
                        {codgrupo:17,description:"Pizzas"},
                        {codgrupo:18,description:"Horno"},
                        {codgrupo:19,description:"Cervezas"},
                        {codgrupo:20,description:"Rebozados"},
                        {codgrupo:21,description:"Frituras"},
                        {codgrupo:22,description:"Yogures"},
                        {codgrupo:23,description:"Helados"},
                        {codgrupo:24,description:"Licores"},
                        {codgrupo:25,description:"Copas"},
                        {codgrupo:26,description:"Cafes"},
                        {codgrupo:27,description:"Poleos"},
                        {codgrupo:28,description:"Hamburguesas"},
                        {codgrupo:29,description:"Chips"}]
            };
            */

            //var datospagina=Enumerable.from(datos.grupos)
            //                        //.take(index*pagerow)
            //                        .skip(pageindex*pagerow)
            //                        .take(pagerow)
            //                        .select("$").toArray();
            //console.dir(datospagina);
            //var datosindexpagina={grupos:datospagina};
            //var panel=new components.container({
            //  container:".container .pages .content .panel-scroll-item",
            //  pathTemplate:"src/shared/templ/",
            //  data:datosindexpagina,
            //  nametemplate:"listcollection01"
            //});
            var scrollPanel = new components.panelScroll({
                nameid: "#root ",
                container: ".main .content",
                containerComponent: ".panel-scroll-01",
                endScroll: function () {
                    console.log("estoy al final del scroll");
                },
                //scroll:".panel-scroll-content",
                //items:".panel-scroll-item",
                item: ".group .input"
                //btnup:"#btn-slide-up",
                //btndown:"#btn-slide-down",
                //fnClickElement:clickElementAccordion
            });
            scrollPanel.initevent();
            //var dateobject=pikadayResponsive(document.getElementById("fecha"));
            //console.dir(dateobject);
            var field = document.getElementById("fecha");
             
            var picker = new Pikaday({
                field: document.getElementById("fecha"),
                trigger: document.getElementById("btn-fecha"),
                format: "DD/MM/YYYY",
                bound: false,
                onSelect: function () {
                    //console.log(d);
                    field.value = picker.toString();
                    picker.hide();
                    $("#calendar1").toggleClass("tether-open");
                    tepicker.position();
                }
                //position: 'top left'
                //reposition:true,
                //container:document.querySelector(".main .content")
            });
            //console.dir(picker);
            picker.el.id = "calendar1";
            //console.dir(picker.el);
            //console.dir($("#calendar1"));
            picker.hide();
            var field1 = document.getElementById("fecha1");
            var picker1 = new Pikaday({
                field: document.getElementById("fecha1"),
                bound: false,
                onSelect: function (d) {
                    field1.value = picker1.toString();
                    picker1.hide();
                    $("#calendar2").toggleClass("tether-open");
                    tepicker1.position();
                    //console.log(d);
                }
            });
            picker1.el.id = "calendar2";
            picker1.hide();

            var tepicker = new Tether({
                element: "#calendar1",
                target: "#btn-fecha",
                attachment: "bottom right",
                targetAttachment: 'top right',
                constraints: [
                    {
                        to: 'scrollParent',
                        pin: true
                    }]
            });
            $("#btn-fecha").on("click", function (e) {
                e.preventDefault();

                $("#calendar1").toggleClass("tether-open");
                tepicker.position();
                //console.log("estoy en click");

                if (picker.isVisible()) {
                    //picker.show();
                    picker.hide();
                    //picker._o.bound=true;
                } else {
                    picker.show();
                    //picker._o.bound=false;
                    //picker.adjustPosition()
                    //picker.show();

                }



            });
            //$("#calendar1").on("click",function(e){
            //   console.log(picker.toString());
            //});
            var tepicker1 = new Tether({
                element: "#calendar2",
                target: "#btn-fecha1",
                attachment: "bottom right",
                targetAttachment: 'top right',
                constraints: [
                    {
                        to: 'scrollParent',
                        pin: true
                    }]
            });
            $("#btn-fecha1").on("click", function (e) {
                e.preventDefault();
                //$("#calendar2").removeClass("is-hidden"); 
                $("#calendar2").toggleClass("tether-open");
                tepicker1.position();
                if (picker1.isVisible()) {
                    //picker.show();
                    picker1.hide();
                    //picker._o.bound=true;
                } else {
                    picker1.show();
                    // picker1.adjustPosition();
                    //picker._o.bound=false;
                    //picker.adjustPosition()
                    //picker.show();

                }
            });

            $("#search").on("click", function (e) {
                e.preventDefault();
                $(".datalist").toggleClass("tether-open");
                telist.position();
            });
            var telist = new Tether({
                element: ".datalist",
                target: "#search",
                attachment: "top right",
                targetAttachment: 'bottom left',
                constraints: [
                    {
                        to: 'scrollParent',
                        pin: true
                    }]
            });



            /*            
            panel.create(function(options){
               var scrollPanel=new components.panelScroll({
               nameid:"#root ",
               container:".main .content",
               containerComponent:".panel-scroll-01",
               endScroll:function(){
                 console.log("estoy al final del scroll");
               },
               //scroll:".panel-scroll-content",
               //items:".panel-scroll-item",
               item:".list-collection li"
               //btnup:"#btn-slide-up",
               //btndown:"#btn-slide-down",
               //fnClickElement:clickElementAccordion
               });
               scrollPanel.initevent();
               
               var paginacion=new components.paginacion({
                   maxRecord:30,
                   pageRow:5
               });
               //var paginacion01=util.pagelinks(4,30);
               //console.dir(paginacion01);

               //console.dir(paginacion.numPage(3));
               var datospage={NumPage:paginacion.numPage(3),pageindex:1};
               
               var paginacionControl=new components.paginacionControl({
                   container:"#root footer",
                   pathTemplate:"src/shared/templ/",
                   clickButton:function(index){
                       //console.log(index);
                       
                    if (!isNaN(index)){
                       pageindex=index;
                       datospagina=Enumerable.from(datos.grupos)
                                    //.take(index*pagerow)
                                    .skip(pageindex*pagerow)
                                    .take(pagerow)
                                    .select("$").toArray();
                       //console.dir(datospagina);
                       datosindexpagina={grupos:datospagina};
                       $("#root .panel-scroll-item ").empty();
                       panel.render(datosindexpagina,"reload");
                       datosPage={NumPage:paginacion.numPage(Number(pageindex)),
                           pageindex:index};
                       console.dir(datosPage);
                       $("#root footer").empty();        
                       paginacionControl.render(datosPage,"reload");
                    }
                       
                   },
                   fnReload:function(){
                      scrollPanel.resize();
                   },
                   //paginacion:paginacion,
                   data:datospage,
                   nametemplate:"pagecontrol01"
               });
               
            });
            */

            /*
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
            */
        });
    } //end if 

});
