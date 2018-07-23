import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
@Injectable()
export class PhpService{
    constructor(private _http:Http){
    };
    getEmployess():any{
        return this._http.get("https://voliveafrica.com/webservices/get_all_users.php")
                .map((res:Response)=>{
                    return res.json();
        }).catch(this._handleError);
    };
    public _handleError(err){
        console.error("Error Raised..."+err);
        return Observable.throw(err || "Internal Server Error !");
    }
}