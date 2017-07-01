/// <reference path="../../typings/index.d.ts" />

;(function(ns,components,util){
   


   ns.productos=(function(){
        return function productos(options){
           
            if (options){
                this.init(options);
            }
        }; 
   })();
   
   ns.productos.prototype=new components.controller({
       nameController:"productos"
   });
   
   ns.productos.prototype.index=function index(){
   
           return this.view();
   };
   
})(this.myControllers=this.myControllers||{},this.components,this.util)