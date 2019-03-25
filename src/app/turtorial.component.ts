import{Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello|uppercase}}</h2>
    <p>Now is: {{today|date:'shortDate'}}</p>
    <p>Tlt: {{tlt|percent}}</p>
    <p>2 power 10={{2|test:10}}</p>`
    
})
export class TurtorialComponent{
    public hello="ahhungknow";
    public today=Date.now();
    public tlt:number=0.94;
    public num:number=2;
}