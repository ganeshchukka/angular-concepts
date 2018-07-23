import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/emp.model';
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor() { }
  employees: Employee[] = [
    {
      id: 1,
      name: 'Michele',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'Rock',
      isActive: true,
      photoPath: 'assets/images/b.jpg',
      password: 37556,
      confirmPassword: 37556
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/a.jpg',
      password: 37555,
      confirmPassword: 37555
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/c.jpg',
      password: 37546,
      confirmPassword: 37546
    },
  ];

  ngOnInit() {
  }

}
