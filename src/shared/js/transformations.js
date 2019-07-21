/// <reference path="./main.d.ts" />

;(function(ns){
    ns.gruposToElements=function(value){
                //console.dir(values);
                var activos=value.filter(function(obj){
                    return obj.Activo===true;
                });
                //console.dir(activos);
                var elementos=activos.map(function(obj){
                    //console.dir(obj);
                    return (function(){
                     var subelements=[];
                     var codfamilia,codgrupo;
                     obj.gesFamilias.forEach(function(elemento,index){
                         //console.dir(elemento);
                         //console.log(obj.Descripcion);
                         codgrupo=undefined;
                         codfamilia=undefined;
                         if (elemento.Activa==true){
                             if (obj.Descripcion==elemento.Descripcion){
                                 codgrupo=elemento.CodGrupo;
                                 codfamilia=elemento.CodFamilia;
                             }else{
                                    subelements.push({description:elemento.Descripcion,link:"#/api/productos/getProductos/"+elemento.CodGrupo+"/"+elemento.CodFamilia,codfamilia:elemento.CodFamilia,codgrupo:elemento.CodGrupo});
                             }
                         }
                     })  //end forEach

                     //console.dir(subelements); 
                     if (subelements.length==0){
                         //console.log("no hay subelementos")
                         if (codgrupo){
                              return  {element:{description:obj.Descripcion,link:"#/api/productos/getProductos/"+codgrupo+"/"+codfamilia,codfamilia:codfamilia,codgrupo:codgrupo}}
                         }else{
                               return  {element:{description:obj.Descripcion,link:"#"}}
                         }
                        
                     }else{
                        // console.log("hay sub elementos");
                         return  {element:{description:obj.Descripcion,link:"#",subelements:subelements}}
                     }
                    
                   })();
                 
                });
                //console.dir(elementos);
                var menu={menu:elementos}; 
                return menu;
    };
    ns.grupos=function grupos(value){
        var grupos={grupos:value};
        return grupos;
    }
    
})(this.transformations||(this.transformations={}));