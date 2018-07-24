import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class CountriesService {
  constructor(private _http: Http) {}
    public getCountries(): any {
      return this._http.get('http://restcountries.eu/rest/v2/all')
    .map((res: Response) => {
      return res.json();
})
 .catch(this._handleError);
}
     public _handleError(err) {
        console.error('Error Raised ..' + err);
        return Observable.throw(err || 'internal  server error');
    }
  }