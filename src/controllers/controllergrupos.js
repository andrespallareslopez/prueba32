/// <reference path="../../typings/index.d.ts" />

;(function(ns,components,util){
   

   ns.grupos=(function(){
        return function grupos(options){
            
            (function(options){
               options.dataUrl=values.host+"/"+"api/grupos";
               options.fetchTransform=transformations.grupos;               

            })(options=options||{});
            
            
            if (options){
                this.init(options);
            }
        }; 
   })();
   
   
   ns.grupos.prototype=new components.controller({
       nameController:"grupos"
   });
   ns.grupos.prototype.initDbContex=function(options){
       
   }
   ns.grupos.prototype.index=function index(){
           //this.options.cached=true;
           return this.view();
   };
   ns.grupos.prototype.grupobyid=function grupobyid(id){
       //this.options.cached=true;
       return this.view({
           nameView:"frmGrupos"
       });
   };
   ns.grupos.prototype.grupobySearch=function grupobySearch(cadena){
       var self=this;
       this.options.cached=true;
       //console.dir(self.options.dataContext);
       var datos=Enumerable.from(self.options.dataContext.grupos).where(function(x){
               //console.log(x.Descripcion);
               var descri=new String(x.Descripcion).toLowerCase();
               
               var cadenasearch=new String(cadena).toLowerCase();
               //console.log(descri);
               //console.log(cadenasearch);
               //console.log(descri.match(cadenasearch.toString()));
           return descri.match(cadenasearch.toString())!=null ? true:false;   
       }).select("$").toArray();
       //console.dir(datos);
       return this.view({
           nameView:"frmGruposSearch",
           data:{grupos:datos}
       });
   }
    
})(this.myControllers=this.myControllers||{},this.components,this.util)