import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PostService {
  constructor(private _http: Http) { }
  public convertToUpperCase(obj): any {
    return this._http.post('http://test-routes.herokuapp.com/test/uppercase', obj)
        .map((res: Response) => res.json())
        .catch(this._handleError);
  }
  public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throw(err || 'Internal Server Error !');
  }
}
