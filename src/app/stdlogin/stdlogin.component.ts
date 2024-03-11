import { Component, OnInit } from '@angular/core';
import { StdService, Student } from '../std.service';

@Component({
  selector: 'app-stdlogin',
  templateUrl: './stdlogin.component.html',
  styleUrls: ['./stdlogin.component.css']
})
export class StdloginComponent implements OnInit {
  students: Student[]=[];
  newStudent: Student = { sid: 0, sName: '', sAdd: '', sNo: '', school: '' };
  constructor(private stdService:StdService) { }

  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(): void {
    this.stdService.getAllStudents().subscribe((students: any) => {
      this.students = students;
    });
  }

  deleteStudent(id: any): void {
    this.stdService.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }


  add() {
    this.stdService.addStudent(this.newStudent)
      .subscribe((response) => {
        console.log('Student added successfully:', response);
        // Clear the form after adding the student
        this.newStudent = { sid: 0, sName: '', sAdd: '', sNo: '', school: '' };
      }, (error) => {
        console.error('Error adding student:', error);
      });
  }
  

}
