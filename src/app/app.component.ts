import { Component,ViewChild } from '@angular/core';
import {TurtorialComponent} from './turtorial.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Hello World this is my app';
  public agree:number=0;
  public disgree:number=0;
  public names=['A','B','C','D'];
  parentVote(agree:boolean){
    if(agree)
      this.agree++;
    else
      this.disgree++;
  }
  @ViewChild(TurtorialComponent) 
  private turtorialComponent:TurtorialComponent;
  changeName(){
    this.turtorialComponent.SetName("Changed");
  }
}
