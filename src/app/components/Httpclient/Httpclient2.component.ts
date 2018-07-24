import { Component, OnInit } from '@angular/core';
import { HttpClientTwoService } from '../../services/Httpclient/httpClient2.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component ({
selector: 'app-httpclient',
templateUrl: './HtttpClient2.component.html'
})
export class HttpClientTwoComponent implements OnInit {
    private result_two: any;
    constructor (private service: HttpClientTwoService) { }
public send(obj) {
this.service.convertToUpperCase(obj).subscribe(res => {
this.result_two = res;
}, (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
console.log('client side error');
} else {
console.log('server side error');
}
});
}
ngOnInit() {
}
}