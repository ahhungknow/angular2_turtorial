import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`<h2>{{hello}}</h2>
    <img [src]="image"/>
    <br>
    <input type="text" [value]="name"/>`,
    styles:['h2 {color:red}']
})
export class FirstComponent{
    public hello="Hello ahhungknow - You are using one way binding";
    //property binding
    public image="http://lorempixel.com/300/300";
    public name="ahhungknow";
}