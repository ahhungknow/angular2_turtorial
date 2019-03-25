import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Hello World this is my app';
  onSubmit(value:any){
    alert(value.name+" "+value.contact+" "+value.contact+" "+value.contact);
  }
}
