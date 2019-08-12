
import {util} from './util01.js';
import {components} from './components01.js';
import {UXDataList} from './UXDataList.js'

var controls;

;(function(ns,UXDataList,$){
    "use strict";
    ns.UXSearchList=(function(){
        return function(options){
                       
         
         //Si no estubiera definida la propiedad textTemplate entonces
         //no va a iniciar el initevent desde components01.js, por tanto
         //tenemos que lanzarlo nosotros manualmente.
         var params=[].slice.call(arguments);
         if (params.length>0){
            
             this.initControl.apply(this,params);
         }
         
        }
     })();
     ns.UXSearchList.prototype=new UXDataList();
     
     ns.UXSearchList.prototype.initControl=function(options){
        console.log("estoy en UXSearchList initControl")
        ;(function(options){
            options.id=options.id||undefined
            options.containerComponent=options.containerComponent||".panel-datalist"
            options.data=options.data||undefined
            options.nameblock=options.nameblock||'.group-block'
            options.namefield=options.namefield||'#busquedatxt'
            options.namedatalist=options.namedatalist||'.datalist'
            options.namebutton=options.namebutton||'#search'
            options.namebuttonclose=options.namebuttonclose||'#btn-slide-close01'
            options.inputText=options.inputText||'#busquedatxt' 
            options.onButtonClick=options.onButtonClick||undefined
            options.onClose=options.onClose||undefined
        })(options)
        //renombramos el datalist
        var id=options.id;
        var namedatalist=id+"datalist";
        $("#"+id+" "+options.namedatalist).get(0).id=namedatalist;
        //******************************** */
        options.container="#"+namedatalist+" "+options.containerComponent;
        //********************************* */
        this.$inputText=undefined

        this.init(options)
        this.initEventInputSearch(options)

        if (!this.options.textTemplate && this.initevent){
            this.initevent(options)
         }   
       
     }
     ns.UXSearchList.prototype.initEventInputSearch=function(options){
        var self=this
        console.log('estoy dentro de UXSearchList initeventinputsearch')
        
        self.eventbuttons()
     }
})(controls=controls||{},UXDataList,jQuery)

export {controls}
if (!window.controls)
   window.controls={}
   
util.addNameSpace(window.controls,controls);