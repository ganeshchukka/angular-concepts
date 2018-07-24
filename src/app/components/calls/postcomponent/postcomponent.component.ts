import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { PostService } from '../../../services/calls/postservice.service';

@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostComponent implements OnInit {
public result: any;
  constructor(private _service: PostService) { }
  public sendData(obj): any {
  this._service.convertToUpperCase(obj).subscribe(res => this.result = res ,
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('client side error');
      } else {
        console.log('server side error');
      }
    });
  }
  ngOnInit() {
  }

}
