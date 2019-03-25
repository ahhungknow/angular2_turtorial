import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TurtorialComponent} from './turtorial.component';

import{FormsModule} from '@angular/forms'
import{ExponentialStrengthPipe} from './test.pipe'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,TurtorialComponent,ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
