import {Component} from 'src/componentsImports/componentDecorator.js'

import cadenaform from 'src/shared/templ/myform01.html!text'

const cadenaformstring= `
  <form id="form01" class="form-fix-basic-01 " >
    <my-calendar id="cal1"></my-calendar>
    <my-input></my-input>
    <my-search id="search01"></my-search>
    <my-combo id="combo01"></my-combo>
    <my-calendar id="cal2"></my-calendar>
    <my-combo id="combo02"></my-combo>
</form>
`

@Component({
    selector:'my-form',
    textTemplate:cadenaform,
    cssUrls:['src/components/forms/03form-fix-basic-01.css']
})
export class webform{}