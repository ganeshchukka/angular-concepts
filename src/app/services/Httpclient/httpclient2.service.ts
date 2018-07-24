import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpClientTwoService {
constructor (private _http: HttpClient) { }
public convertToUpperCase(obj): any {
    return this._http.post('http://test-routes.herokuapp.com/test/uppercase', obj);
}
}
