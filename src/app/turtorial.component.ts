import{Component} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello}}</h2>
    <p [ngClass]="{one:cone,two:ctwo}">This is ngClass apply style</p>
    <button (click)="toggle()">Change style</button>
    <p [ngStyle]="{'font-style':style,'font-size':size}">This is paragraph will be apply  to ngStyle</p>
    `,
    styles:[`
    .one{color:red;}
    .two{background-color:black;}
    `]
})
export class TurtorialComponent{
    public hello="Hello ahhungknow - Angular";
    public cone=true;
    public ctwo=true;
    public toggle(){
        this.cone=!this.cone;
        this.ctwo=!this.ctwo;
    }
    public style="italic";
    public size="30px";
}