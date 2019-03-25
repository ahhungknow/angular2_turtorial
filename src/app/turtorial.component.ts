import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`<h2 [class.redColor]="applyClass">{{hello}}</h2>
              <h1 [class.greenColor]="applyClass">{{hello}}</h1>`,
    styles:[`.redColor{
        color:red;
    } 
              .greenColor{
                  color:green;
              }`
              ]
})
export class FirstComponent{
    public hello="Hello ahhungknow - Angular";
    public applyClass=true;
}