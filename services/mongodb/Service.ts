import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class MongoService {
constructor (private _http: Http) {}
public getProducts(): any {
    return this._http.get('http://localhost:8080/fetch')// hit the server
    .map((res: Response) => { return res.json();
    })
    .catch(this.handleError);
}
public handleError(err) {
    console.log('error Raised' + err);
    return Observable.throw(err || 'internal error');
}
}