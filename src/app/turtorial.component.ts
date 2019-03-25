import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello}}</h2>
    <h3 *ngIf="showLineIf">This is ngIf directive line</h3>
    <div [ngSwitch]="color">
        <p *ngSwitchCase="'red'">This line color is red</p>
        <p *ngSwitchCase="'blue'">This line color is blue</p>
        <p *ngSwitchCase="'green'">This line color is green</p>
        <p *ngSwitchDefault>Invalid color</p>
    </div>
    <ul>
        <li *ngFor="let i of colors">{{i}}</li>
    </ul>`
})
export class TurtorialComponent{
    public hello="Hello ahhungknow - Angular";
    public showLineIf=false;
    public color="blue";
    public colors:string[] =["red","green","blue"];
}