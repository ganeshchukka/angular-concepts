import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LoginService {
constructor (private _http: Http) {}
public postLoginDetails(login_details: any): any {
    return this._http.post('http://localhost:8080/login', login_details)
    .map((res: Response) => { return res.json();
    })
    .catch(this.handleError);
}
    public handleError(err) {
        console.error('error Raised' + err);
        return Observable.throw(err || 'internal error');
    }
}
