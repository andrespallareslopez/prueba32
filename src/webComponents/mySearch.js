import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenabusqueda from 'src/shared/templ/inputbusqueda01.html!text'

 @Component({
    selector: 'my-search',
    textTemplate:cadenabusqueda
})
export class mysearch{

}