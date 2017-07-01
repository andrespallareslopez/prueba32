/// <reference path="../../../typings/index.d.ts" />

;(function(ns,util,behaviors,Handlebars,$){
   
 ns.controller=(function(){ 
       
    return function(options){
           
            if (options){
                this.init(options);
            }
        };
    })();
 
 ns.controller.extend=(function(){
         
    return function(objeto){
            //console.log("estoy dentro de extend");
            //console.dir(this);
            util.extend(objeto,ns.controller.prototype);      
         };
         
    })();
 ns.controller.prototype.init=function(options){
     
     (function(options){
         options.dataContext=options.dataContext||undefined;
         options.dataUrl=options.dataUrl||undefined;
         options.nameController=options.nameController||undefined;
         options.fetchTransform=options.fetchTransform||undefined;
         options.cached=options.cached||false;
     })(options);
     this.options={};
     util.extend(options,this.options); 
     this.pathTemplate="src/views/";
     this.nameAction=undefined;

 };
 //*******************************************************
 
 ns.controller.prototype.view=function(params){
     var self=this;
     var  fetchData=undefined; //o tambien {}
      
     if (!self.options.cached){
         self.options.dataContext=undefined;
     }
     
     if (self.options.dataContext){
         fetchData=self.options.dataContext;
     }
 //console.dir(fetchData);
     if (self.options.dataUrl){
          if (!fetchData){
               fetchData=(function(url){
                 return util.http.get(url);
               })(self.options.dataUrl);
          }
     }
     this.nameAction=this.view.caller.name;
     //console.log(params);
     if (params){
        //podemos tener un nombre de vista
        //y datos       
        if (params.nameView){
           this.nameAction=params.nameView
        }
        if (params.data){
           fetchData=params.data; 
        }
     }
     //depende de los parametros devolvemos una promesa o 
     //una vista con datos o sin datos
     
     
     if (!this.nameAction){
      
         console.log("nombre de accion no establecido")
         //mostrar error nombre de vista no encontrado en la funcion view
     }
     //var pathTemplate=this.pathTemplate+"/" 
     //console.dir(this.options);
     var route=this.pathTemplate+this.options.nameController+"/";
     console.log(route);
     console.log(this.nameAction);
     var templateView=util.getTemplate(route,this.nameAction);
    
     var promise=renderTemplateMVC.apply(this,[templateView,fetchData]);
     
     return promise;
 }; 
 var renderTemplateMVC=function(template,data){
    var self=this;
    var html;
    
    console.log("estoy dentro de renderTemplateMVC");
    var promise=new Promise(function(resolve,reject){
    
        Promise.all([template,data]).then(function(values){
            console.log(values[1]);
            var datos;
         
            if (self.options.fetchTransform){
                    if (!self.options.dataContext){
                        datos=self.options.fetchTransform(values[1]);
                        self.options.dataContext=datos;
                    }else{
                         datos=values[1];
                    }
            }else{
                    datos=values[1];
                    //self.options.dataContext=datos;
            }
              //self.options.dataContext=datos;
            
            //console.dir(self.options.dataContext);
            var params={};
            (function(params){
                    params.data=datos;
                    params.source=values[0];     
                    //params.container=self.options.container;
                    //params.typeInsertHTML=self.options.typeInsertHTML;
            })(params);
            
            html=buildTemplateHandlebars.apply(self,[params]);
            //console.dir(html);
            if (params.data){
              //self.options.dataContext=params.data;
            }
            resolve(html);
            
        }).catch(function(data){
            //console.log("catch:"+data);
            reject(data);
        });
    
    });
    return promise;
    
 }
 var buildTemplateHandlebars=(function(){
        return function(params){
            //$Id=$(params.id);
            //$Id.empty();
            //console.dir(params.data);
            var template=Handlebars.compile(params.source);
            var context=params.data;
            var html=template(context);
            
            return html  
        };
    })();
 //***********************************************
 ns.handleMVC=(function(){ 
       
    return function(options){
           
            if (options){
                this.init(options);
            }
        };
    })();

  
 //********************************************************   
 ns.handleMVC.prototype.init=function(options){
    (function(options){
       options.containerView=options.containerView||undefined;
       options.containerYields=options.containerYields||undefined;
       options.mycontrollers=options.mycontrollers||undefined;
       
    })(options);
    
    this.options={};
    util.extend(options,this.options); 
    this.instanceController={};
    this.viewContainer={};
    this.behaviors={};
    
    if (this.options.mycontrollers){
        
    }else{
        //mostrar aviso de que no hay controlladores
    }
  
 };
 //***************************************************************** 
 ns.handleMVC.prototype.createController=function(nameController){
     
            if (nameController in this.instanceController){

            }else{
                console.log("creamos controlador:"+nameController);
                //no existe la instancia de ese controllador
                //por tanto hay que crear la instancia
                if (!this.instanceController[nameController]){
                     this.instanceController[nameController]=new this.options.mycontrollers[nameController]({
                        nameController:nameController
                     });
                }
               

            }     
 };
 ns.handleMVC.prototype.createAction=function(nameController,nameAction,params){
          var self=this;
          console.log("creamos la accion:"+nameAction+" del controlador:"+nameController);
          //this.viewContainer[nameController+"/"+nameAction]=this.instanceController[nameController][nameAction]();
          removeContainer(self.options.containerView);    
          var loader=new components.container({
              container:self.options.containerView,
              pathTemplate:"src/components/loaders/loaders02/",
              nametemplate:"loaders02" 
          })
          console.log(params);
          var promesa=this.instanceController[nameController][nameAction](params);
          promesa.then(function(html){
            //console.log(html);
            
            removeContainer(self.options.containerView);    
            self.viewContainer[nameController+"/"+nameAction]=html;
            
            

            var container=new components.container({
                container:self.options.containerView
            });

            container.promise.then(function(mutation){
               console.log("estoy dentro de mutation en createAction");
                  
               getProperties.apply(self,[html,nameController,nameAction]);
               
               
            });
            
            appendToContainer.apply(self,[html,self.options.containerView]); 
             
            
          }).catch(function(error){
             
             removeContainer(self.options.containerView);  
             console.log(error);
          });
 };

 //********************************************************************* 
 ns.handleMVC.prototype.render=function(nameController,action,params){
    console.log("estoy dentro de render:"+nameController);
    if (nameController in this.options.mycontrollers){
      console.log("existe el controlador:"+nameController);  
      this.createController(nameController);
      //console.dir(this.instanceController[nameController]);
      
      if (action in this.options.mycontrollers[nameController].prototype){
          console.log("existe accion:"+action);
          
          this.createAction(nameController,action,params);
           
          //console.dir(this.viewContainer[nameController+"/"+action]);
      }else{
          console.log("no existe esta accion:"+action);
          //mostrar error que no existe dicha accion
      }
    }else{
        console.log("no existe este controlador:"+nameController);
        //mostrar error de que nos existe dicho controllador
    }
 };
 var getProperties=function(html,nameController,nameAction){
    var self=this;
    //console.dir(options);
    
    //var behavior=$(html).first().data("behavior");
    var properties=$(html).data();
    console.dir(properties);
    //console.log(properties.behavior);
    if (properties.behavior){
       if (!(nameController+"/"+nameAction in self.behaviors)){
          self.behaviors[nameController+"/"+nameAction]=behaviors[properties.behavior];
          
       }
       self.behaviors[nameController+"/"+nameAction]();
    }
    if (properties.yieldFor){
        console.log("hay propiedades yieldfor");
        var fieldfor=new components.containerYieldFor({
            html:html
        });
    }else if ("isView" in properties){
      
      var deleteyieldto=new components.deleteYieldTo({
          container:self.options.containerYields,
          html:html
      });

    }

 };
 //******************************************* 
 function getElementsByAttribute(attr, value) {
  var match = [];
  /* Get the droids we are looking for*/
  var elements = document.getElementsByTagName("*");
  /* Loop through all elements */
  for (var ii = 0, ln = elements.length; ii < ln; ii++) {
    if (elements[ii].nodeType === 1){      
      if (elements[ii].name != null){        
      /* If a value was passed, make sure it matches the elements */
        if (value) {
          if (elements[ii].getAttribute(attr) === value) 
           match.push(elements[ii]);           
      } else {
        /* Else, simply push it */
         match.push(elements[ii]);          
      }
     }
   }
  }
return match;
};
 function recreateNode(el, withChildren) {
  if (withChildren) {
    el.parentNode.replaceChild(el.cloneNode(true), el);
  } else {
    var newEl = el.cloneNode(false);
    while (el.hasChildNodes()) newEl.appendChild(el.firstChild);
    el.parentNode.replaceChild(newEl, el);
  }
 };
 
 var appendToContainer=function(html,containerview){
     var self=this;
     console.log("estoy dentro de appendToContainer");
     console.log(containerview)
     
     
     $(html).appendTo(containerview);
     
 };
 var removeContainer=function(containerview){
     var self=this;
      console.log("estoy dentro de removeContainer");
     console.log(containerview)
        //Tratar de borrar elementos de esta manera y sus eventos
     recreateNode(document.querySelector(containerview),true);     
     
     //limpiar el area antes de inyectar el codigo html
     $(containerview).empty();
  
 };

})(this.components=this.components||{},this.util,this.behaviors,Handlebars,jQuery);  //podriamos poner simplemente this, y no definir components
