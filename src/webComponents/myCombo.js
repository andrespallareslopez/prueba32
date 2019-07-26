import {Component} from 'src/componentsImports/componentDecorator.js'
import cadenacombo from 'src/shared/templ/inputcombo01.html!text'

import cadenadatamesas from 'src/shared/templ/datalistmesas.html!text'
import cadenadataarticulos from 'src/shared/templ/datalistarticulos.html!text'

import {datos,mesas,categorias,articulos} from 'src/shared/js/listInMemory.js'

@Component({
    selector:'my-combo',
    textTemplate:cadenacombo,
    cssUrls:['bower/tether/dist/css/tether.css',
    'src/components/panel/04PanelScroll01.css',
    'src/components/list/03datalist01.css'
    ],
    importsUrl:['bower/tether/dist/js/tether.js',
    {url:'src/componentsImports/UXDataList.js',typemodule:'module'},
    {url:'src/componentsImports/UXButtonScroll.js',typemodule:'module'}
    ]
})
export class mycombo{

   initevent(options,id){
     var scroll;
     var datalist;
     //console.log(id);
     datalist=new controls.UXDataList({
        id:id,
        clearContainer:true,
        /*
        data:(function(id){
         if (id=="combo01")    
          return   {articulos:articulos}
         else if(id=="combo02")
           return {mesas:mesas}
        })(id),
        */
        /*
        textTemplate:(function(id){
           if (id=="combo01")
             return cadenadataarticulos
           else if (id=="combo02")
             return cadenadatamesas
        })(id),
        */
        onButtonClick:function(options){
            if (id=="combo01")    
              datalist.setData({articulos:articulos},id,cadenadataarticulos)
            else if(id=="combo02")
              datalist.setData({mesas:mesas},id,cadenadatamesas)
               
            scroll=new controls.UXButtonScroll({
                id:id+'datalist',
                onItemClick:function(value,target){
                    console.dir(target)
                    //console.log("estoy dentro de onItemClick")
                    datalist.$inputText.val(value);
                    datalist.toggle();
                    scroll.destroy();
                }
            })
        },
        onClose:function(){
           scroll.destroy();
        }
    })
   }
}
