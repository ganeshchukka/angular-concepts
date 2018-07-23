import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../services/Httpclient/httpClient.service';
import {HttpErrorResponse} from '@angular/common/http';
@Component ({
selector: 'app-httpclient',
templateUrl: './HtttpClient.component.html'
})
export class HttpClientComponent implements OnInit {
    private result: any;
    constructor (private service: HttpClientService) { }
    ngOnInit() {
this.service.getCountries().subscribe(res => {
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