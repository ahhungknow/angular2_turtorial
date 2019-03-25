import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`<h2 [class.redColor]="applyClass">{{hello}}</h2>
    <button (click)="onClick()">Click me!!</button>`,
    styles:['.redColor{color:red}']
})
export class TurtorialComponent{
    public applyClass=false;
    onClick(){
        if(this.applyClass==false)
            this.applyClass=true;
        else
            this.applyClass=false;
    }
    public hello="Hello ahhungknow - Angular";
}