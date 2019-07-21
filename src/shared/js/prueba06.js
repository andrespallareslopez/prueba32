/// <reference path="./main.d.ts" />

/**
 * JavaScript Decorators: What They Are and When to Use Them
 * https://www.sitepoint.com/javascript-decorators-what-they-are/
 * 
 * 
 * Exploring EcmaScript Decorators
 * https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841
 * 
 * 
 */
$(()=>{
    
    const autorize=function(target,name,descriptor){
        console.dir(descriptor);
        const value=descriptor.value;
        descriptor.value=function(){
            console.log("estoy en descriptor");
            //value="autorize"
            return value.apply(this,arguments);
            
        }
        return descriptor
    };
         
    class Controller {
        constructor(){
          console.log("estoy en constructor")
        }
        @autorize
        action01(){
           console.log("estoy en action01")
           return "ok";
        }
        @autorize
        action02(){
           console.log("estoy en action02")
        }
    }; 
        
    const controller=new Controller();
    
    controller.action01();
    controller.action02();
    
    
    //console.log("estoy aqui");
    
});

