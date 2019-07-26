import {Component} from 'src/componentsImports/componentDecorator.js'
import cadenainput from 'src/shared/templ/input01.html!text'

@Component({
    selector:'my-input',
    textTemplate:cadenainput
})
export class myimput{

}