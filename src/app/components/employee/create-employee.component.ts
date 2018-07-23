import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormGroupName, Validators} from '@angular/forms';
import { Departments } from '../../model/departments';
import { Employee } from '../..//model/emp.model';
// import { matchingPasswords } from './validators';
import { ConfirmEqualValidatorDirective } from '../../directive/confirm-.equal.validator.directive';
@Component({
selector: 'app-create-employee',
templateUrl: './create-employee.component.html',
styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
private employeeForm: FormGroup;
employee: Employee = {
id: null,
name: null,
gender: null,
contactPreference: null,
phoneNumber: null,
email: null,
dateOfBirth: null,
department: null,
isActive: null,
photoPath: null,
password: null,
confirmPassword: null
};
gender = 'male';
departments: Departments[] = [
{ id: 1, name: 'Help Desk' },
{ id: 2, name: 'HR' },
{ id: 3, name: 'IT' },
{ id: 4, name: 'Payroll' }
];
constructor() { }
// saveEmployee(employeeForm:formGroup): void {
// console.log(employeeForm);
// }
ngOnInit() {
this.employeeForm = new FormGroup({
fname: new FormControl('', [Validators.required, Validators.minLength(3),
Validators.maxLength(10), Validators.pattern('[A-Za-z]')),
email: new FormControl('', [Validators.required, Validators.email]),
/*pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"*/
phno: new FormControl('', [Validators.required, Validators.pattern('[0-9]'), Validators.minLength(10)]),
cr: new FormControl('', [Validators.required]),
password: new FormControl('', [Validators.required, Validators.minLength(8)]),
confirmPassword: new FormControl('', [Validators.required]),
gender: new FormControl('', [Validators.required]),
dob: new FormControl('', [Validators.required]),
dp: new FormControl('', [Validators.required]),
ia: new FormControl('', [Validators.required])
});
}
}
