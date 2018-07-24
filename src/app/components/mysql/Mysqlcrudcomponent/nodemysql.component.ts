import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/mysql/nodecrud service/crudService';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-nodemysql',
  templateUrl: './nodemysql.component.html',
  })
export class NodemysqlComponent implements OnInit {
public products: any;
public insertStatus: any;
public updateStatus: any;
public deleteStatus: any;
  constructor(private _service: CrudService) { }
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
public insertData(record: any): any {
this._service.insertProducts(record).subscribe(res => {
  this.insertStatus = res;
},
(err: HttpErrorResponse) => {
if (err.error instanceof Error) {
  console.log('client side error');
} else {
console.log('server side error');
}
});
}
 public updateData(record: any): any {
this._service.updateProducts(record).subscribe(res => {
  this.updateStatus = res;
}, (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
  console.log('client side error');
} else {
  console.log('server side error');
}
});
 }
public deleteData(record: any): any {
this._service.deleteProducts(record).subscribe(res => {
this.deleteStatus = res;
}, (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
console.log('client side error');
} else {
console.log('server side error');
}
});
}
}

