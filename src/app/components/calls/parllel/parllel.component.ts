import { Component, OnInit } from '@angular/core';
import {  CustomersService  } from '../../../services/calls/parllel/custmores.service';
import {  HelloService  } from '../../../services/calls/parllel/hello.service';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
// import { forkJoin } from 'rxjs/observable/forkJoin';
@Component({
  selector: 'app-parllel',
  templateUrl: './parllel.component.html',
  styleUrls: ['./parllel.component.css']
})
export class ParllelComponent implements OnInit {
  public res_one: any;
  public res_two: any;
  constructor(private service_one: CustomersService, private service_two: HelloService) { }
  ngOnInit() {
Observable.forkJoin([this.service_one.getCustomers(), this.service_two.getCountries()])
.subscribe(res => {
this.res_one = res[0];
this.res_two = res[1];
}, (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
  console.error('client side error');
} else {
console.error('server side error');
}
});
  }
}
