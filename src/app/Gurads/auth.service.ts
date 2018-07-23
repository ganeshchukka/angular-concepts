import { Injectable } from '@angular/core';
import { ListEmployeesComponent } from '../components/employee/list-employees.component';
import {CanActivate, CanActivateChild, CanDeactivate, CanLoad } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate , CanActivateChild , CanDeactivate<ListEmployeesComponent> {
  constructor() { }
  canActivate(): boolean {
    return confirm('Do you want enter This  page');
  }
  canActivateChild(): boolean {
    return confirm ('Do you want enter into this child page');
  }
  canDeactivate(): boolean {
    return confirm('Do you want to Leave this page');
  }
  canLoad(): boolean {
    return confirm('This is can Load Gurad concepts ');
  }
}