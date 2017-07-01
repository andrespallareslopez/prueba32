/// <reference path="../../typings/index.d.ts" />

;(function(ns,components,util){
   
   
   ns.familias=(function(){
        return function familias(options){
           
            if (options){
                this.init(options);
            }
        }; 
   })();
   
   ns.familias.prototype=new components.controller({
       nameController:"familias"
   });
   
   ns.familias.prototype.index=function index(){
   
           return this.view();
   };
   
})(this.myControllers=this.myControllers||{},this.components,this.util)
