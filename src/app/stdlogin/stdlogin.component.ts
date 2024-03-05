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
   // this.stdService.addStudent()
   console.log('added new student')
  }
  
  selectedCountryAdvanced: any;
  filteredCountries: any[] | undefined;

  countries: any[] = [
    { name: 'USA', code: 'US' },
    { name: 'Germany', code: 'DE' },
    { name: 'Italy', code: 'IT' },
    { name: 'France', code: 'FR' },
    { name: 'Spain', code: 'ES' }
  ];

  filterCountry(event: { query: string; }) {
    let filtered: any[] = [];
    let query = event.query.toLowerCase();

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

}
