import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent  } from './app.component';
import { DepartmentComponent } from './cmp2/department/department.component';
import { StudentComponent } from './student/student.component';


@NgModule({
  declarations: [
    AppComponent , StudentComponent,DepartmentComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
