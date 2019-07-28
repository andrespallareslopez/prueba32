import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaform from 'src/shared/templ/myform01.html!text'

@Component({
    selector:'my-form',
    textTemplate:cadenaform,
    cssUrls:['src/components/forms/03form-fix-basic-01.css']
})
export class webform{}