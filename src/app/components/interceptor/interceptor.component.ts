import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-interceptor',
  templateUrl: './interceptor.component.html',
  styleUrls: ['./interceptor.component.css']
})
export class InterceptorComponent implements OnInit {
private result: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get('http://restcountries.eu/rest/v2/all').subscribe(res => {
this.result = res;
    }, (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
console.log('client side error');
} else {
console.log('server side error');
}
    });
  }
}
