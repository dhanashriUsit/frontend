// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StdService {

//   private baseUrl = 'http://localhost:8084'; 
//   constructor(private http: HttpClient) { }

//   addStudent(student: Student): Observable<Student> {
//     return this.http.post<Student>(`${this.baseUrl}/add`, student);
//   }

//   deleteStudent(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
//   }

//   getAllStudents(): Observable<Student[]> {
//     return this.http.get<Student[]>(`${this.baseUrl}/all`);
//   }


// }
// export interface Student{

//  sid:number;
//  sName:string;
//  sAdd:string;
//  sNo:string;
//  school:string;

// }

