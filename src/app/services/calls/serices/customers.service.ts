import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable  } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class CustomerService {
  constructor(private _http: Http) {}
    public getCustomers(): any {
      return this._http.get('https://www.w3schools.com/angular/customers.php')
      .map((res: Response) => { return res.json();
    })
    .catch(this._handleError);
    }
    public _handleError(err){
        console.error('Error Raised ..' + err);
        return Observable.throw(err || 'internal  server error');
    }
};