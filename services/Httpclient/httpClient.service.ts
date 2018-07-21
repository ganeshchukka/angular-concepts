import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpClientService {
constructor (private _http: HttpClient) { }
public getCountries(): any {
return this._http.get('http://restcountries.eu/rest/v2/all');
}
}
