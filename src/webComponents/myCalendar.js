
import {Component} from 'src/componentsImports/componentDecorator.js'
import cadenacalendar from 'src/shared/templ/inputcalendar01.html!text'

 @Component({
    selector:'my-calendar',
    textTemplate:cadenacalendar,
    cssUrls:['bower/pikaday/css/pikaday.css',
             'bower/tether/dist/css/tether.css'],
    importsUrl:['bower/moment/moment.js',
                'bower/pikaday/pikaday.js',
                'bower/tether/dist/js/tether.js',
                {url:'src/componentsImports/UXDatePicker.js',typemodule:'module'}]
})
export class mycalendar{
   
   initevent(options,id){
      //console.log("estoy aqui en init event con id:"+id)
      
      new controls.UXDatePicker({
        id:id
       })
   }
}
