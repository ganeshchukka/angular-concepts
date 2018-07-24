import { Component, OnInit } from '@angular/core';
import { MongoService } from '../../services/mongodb/Service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-mongo',
  templateUrl: './component.html',
  })
export class MongoDbComponent implements OnInit {
public products: any;
  constructor(private _service: MongoService) { }
  ngOnInit() {
    this._service.getProducts().subscribe(res => {
      this.products = res;
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
console.log('client silde error');
      } else {
        console.log('server side error');
}
});
}
}