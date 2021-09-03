import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
@NgModule({
  declarations: [
    AppComponent,
    FormAssignmentComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
