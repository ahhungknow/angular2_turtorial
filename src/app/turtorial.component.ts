import{Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello}}</h2>` 
})
export class TurtorialComponent{
    public hello="ahhungknow";
}