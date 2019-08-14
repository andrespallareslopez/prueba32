
import {util} from './util01.js';
import {components} from './components01.js';
import {UXDataList} from './UXDataList.js'
import {UXButtonScroll} from './UXButtonScroll.js'

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
            options.onSearch=options.onSearch||undefined
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
        var scroll
        let id=self.options.id
        let $inputText="#"+id+" "+self.options.inputText
        
        console.dir( self.options.data)
        const datos=self.options.data

        /*
        const datospagina=Enumerable.from(datos.grupos)
                        //.take(index*pagerow)
                        .skip(pageindex*pagerow)
                        .take(pagerow)
                        .select("$").toArray();
        */
        
        $($inputText).on("keydown",function(e){
                      
        })
        $($inputText).on("keyup", debounce(function (e) {
            let datoscombo
            console.dir( self.options.data[id])
            console.log(self.$inputText.val())
            if ($($inputText).val().length>0){
                if (self.options.onSearch){
                    datoscombo=self.options.onSearch(datos,self.$inputText.val(),id)
                }
                self.open()
                /*
                datospagina=Enumerable.from(datos.grupos)
                   .where(
                       (grupo)=>{
                           return grupo.description.includes($($inputText).val())==true
                        })
                    .select("$").toArray()

                   console.dir(datospagina)
                 
                */
            }
            else{
                datoscombo= datos
                self.close()
            }
              if (self.opened()){
                  
                 console.log("estoy dentro de opened")
                 let timer1=setTimeout(() => {
                    scroll=new UXButtonScroll({
                        id:id+'datalist',
                        onItemClick:function(value,target){
                            console.dir(target)
                            //console.log("estoy dentro de onItemClick")
                            self.$inputText.val(value);
                            self.toggle();
                            scroll.destroy();
                        }
                      })
                      clearTimeout(timer1) 
                 }, 50);   
              }
            else
              scroll.destroy()
             

            self.setData(datoscombo,self.options.id,self.options.textTemplate)
            
        },300))       
     }
     function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
})(controls=controls||{},UXDataList,jQuery)

export {controls}
if (!window.controls)
   window.controls={}
   
util.addNameSpace(window.controls,controls);