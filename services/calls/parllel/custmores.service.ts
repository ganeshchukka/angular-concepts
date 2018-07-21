import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class CustomersService {
  constructor ( private _http: Http ) { }
  public getCustomers(): any {
   return this._http.get('https://www.w3schools.com/angular/customers.php')
   .map((res: Response) => { return res.json();
  })
   .catch(this._handleError);
  }
   public _handleError(err) {
console.log('client side err' + err);
return Observable.throw (err || 'Internal server error');

   }
}