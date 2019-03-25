import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TurtorialComponent} from './turtorial.component';

import{FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,TurtorialComponent,
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
