import{Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'first',
    template:`
    <h2>{{hello}}</h2>
    <p>Child component {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disgree</button>
    Result: {{voted}}`
    
})
export class TurtorialComponent{
    @Input()name:string ;
    @Output()onVote=new EventEmitter<boolean>();
    public voted:boolean=false;
    vote(agree:boolean){
        this.voted=true;
        this.onVote.emit(agree);
    }
    SetName(name:string){
        this.name=name;
    }
}