import { Component } from "@angular/core";

//must use decorateor called component
//add selector & template =>same file =template
//                        =>another file=template url
// add student component in app.module
@Component({
    selector:'app-student',
    /*template:`
    <h1> Student Component </h1>
    <p>Angular</p>
    `*/
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})


//to define component called students
 export class StudentComponent {
    name:string='Nermeen'
 }