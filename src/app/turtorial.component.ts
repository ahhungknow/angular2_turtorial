import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello}}</h2>
    <input type="text" [(ngModel)] = "fname" />
    <input type="text" [(ngModel)] = "lname" />
    <br>
    Full name: {{fname}} {{lname}}`
})
export class TurtorialComponent{
    public hello="Hello ahhungknow - Angular";
}