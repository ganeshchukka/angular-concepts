import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class MyInterceptor implements HttpInterceptor {
intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    console.log('In Intercept');
    var req_one = req.clone({
        setHeaders: {'Authorization': 'something write here'}
    });
    return handler.handle(req_one);
}
}