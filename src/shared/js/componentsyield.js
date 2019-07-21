
;(function(ns,util,$){

    ns.containerYieldFor=(function(){ 
       
        return function(options){
            
                if (options){
                    this.init(options);
                }
            };
    })();
    ns.containerYieldFor.prototype.init=function(options){
        (function(options){
          options.container=options.container||".container";
          options.html=options.html||undefined;

        })(options);
     this.options={};
     util.extend(options,this.options);
     this.renderYield(); 
    };
    ns.containerYieldFor.prototype.renderYield=function(){
       var self=this;
       var yieldsFor;
       //console.log(self.options.html);
       yieldsFor=$(self.options.html).filter(function(){
          return  $(this).is("[data-yield-for]")
       });

       //console.dir(yieldsFor);
       //for(var el of yieldsFor){
        // console.dir(el); 
      // }
      $.each(yieldsFor,function(index,el){
          
          //console.log($(el).data("yield-for"));
          //console.log($.trim($(el).html()));
          var yieldfor=new ns.yieldFor({
              html:$.trim($(el).html()),
              key:$(el).data("yield-for")
          })
      })
      
    };
//********************************************************* 
ns.deleteYieldTo=(function(){ 
       
        return function(options){
            
                if (options){
                    this.init(options);
                }
            };
    })();
ns.deleteYieldTo.prototype.init=function(options){
     (function(options){
          options.container=options.container||".container";
          options.html=options.html||undefined;
     
        })(options);
     this.options={};
     util.extend(options,this.options);
     this.deleteYield(); 
};    
ns.deleteYieldTo.prototype.deleteYield=function(){
      var self=this;
      var yieldsTo;
       var stringData;
       /*
      yieldsTo=$(self.options.container).filter(function(){
          console.dir($(this));
           return  $(this).is("[data-yield-to]");
      });
      */
      yieldsTo=$(self.options.container).find("[data-yield-to]");
      //console.dir(yieldsTo);
      $.each(yieldsTo,function(index,el){
          stringData="[data-yield-to='"+$(el).data("yield-to")+"']";
          removeContainer(stringData);
          
          
      })
      
      
}

//*******************************************************************
var getProperties=function(html){
 
    var properties=$(html).data();
    //console.dir(properties);
    return properties;

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
 var removeContainer=function(containerview){
     var self=this;
     console.log("estoy dentro de removeContainer:"+containerview);
     console.log(containerview)
     //Tratar de borrar elementos de esta manera y sus eventos
     console.log(typeof(containerview));
     if (typeof(containerview)=="string"){
          recreateNode(document.querySelector(containerview),true);     
          //limpiar el area antes de inyectar el codigo html
          $(containerview).empty();
     }else if (typeof(containerview)=="object"){
        recreateNode(containerview[0],true);
        containerview.empty();
        //$(containerview.html()).empty();
        console.log(containerview[0].innerHTML);
        
     }
    

 };

 var appendToContainer=function(html,containerview){
     var self=this;
     console.log("estoy dentro de appendToContainer");
     console.log(containerview)
     
     
     $(html).appendTo(containerview);
     
 };


//***************************************************************************
ns.yieldFor=(function(){ 
       
        return function(options){
            
                if (options){
                    this.init(options);
                }
            };
    })();

ns.yieldFor.prototype.init=function(options){
     (function(options){
          options.container=options.container||".container";
          options.html=options.html||undefined;
          options.key=options.key||undefined;
         
        })(options);
     this.options={};
     util.extend(options,this.options);
     this.renderFor();
};
ns.yieldFor.prototype.renderFor=function(){
   var self=this;
   var yieldsTo;
   var stringData="[data-yield-to='"+self.options.key+"']";
   
   yieldsTo=$(self.options.container).find("[data-yield-to='"+self.options.key+"']");
   //console.dir(yieldsTo.attr("id"));
   //console.log(yieldsTo.html());
   //removeContainer("#"+yieldsTo.attr("id"));
   removeContainer(stringData);
   //console.log(self.options.html);
   
   var yieldto=new ns.yieldTo({
       html:self.options.html,
       key:self.options.key,
       stringAttribute:stringData,
       element:yieldsTo
   });
   
   appendToContainer(self.options.html,stringData);

};

ns.yieldTo=(function(){
       
        return function(options){
            
                if (options){
                    this.init(options);
                }
            };
})();
ns.yieldTo.prototype.init=function(options){
     (function(options){
          options.container=options.container||".container";
          options.html=options.html||undefined;
          options.key=options.key||undefined;
          options.element=options.element||undefined;
          options.stringAttribute=options.stringAttribute||undefined;
        })(options);
     this.options={};
     util.extend(options,this.options);
     this.renderTo();
     
};
ns.yieldTo.prototype.renderTo=function(){
     var self=this;
     var properties;
     //var options;
     
      properties=getProperties(self.options.html);
      console.dir(properties);
     //options={};
     //options.container=self.options.stringAttribute;
    
     self.options.element=$(self.options.html).first()
     console.dir(self.options.element);
     if ($(self.options.element).attr("id")){
             //options.nameid="#"+$(self.options.element).attr("id");
             

      }else{
             console.log("no hay nameid establecido en el contenido en el contenedor yieldTo"+self.options.stringAttribute);

      }
     //console.dir(options);
     
     var container=new ns.container({
         container:self.options.stringAttribute
     });
     
     container.promise.then(function(mutation){
         console.log("estoy en promesa container "+self.options.stringAttribute);
        
         //console.dir(mutation);
         //self.options.element=$(self.options.container).find(self.options.stringAttribute).children().first();
         //console.dir(self.options.element);
          if (properties.behavior){
              console.log("estoy dentro de behavior");
             //options.behavior=properties.behavior;
             //behaviors["destroy"+properties.behavior]();
             behaviors[properties.behavior]();
          }
          if (properties.action){
            //options.action=properties.action;
            actions[properties.action]();
            
          } 
          //container.observer.disconnect();
     });
      
};



})(this.components=this.components||{},this.util,jQuery);  //podriamos poner simplemente this, y no definir components