import { Component, OnInit } from '@angular/core';
import { StdService, Student } from '../std.service';

@Component({
  selector: 'app-stdlogin',
  templateUrl: './stdlogin.component.html',
  styleUrls: ['./stdlogin.component.css']
})
export class StdloginComponent implements OnInit {
  students: Student[]=[];

  constructor(private stdService: StdService) { }

  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(): void {
    this.stdService.getAllStudents().subscribe((students: any) => {
      this.students = students;
    });
  }

  deleteStudent(sid:number){

    console.log("deleted from H2....")
  }

  add(){
   console.log('added new student')
  }
  
  

}
