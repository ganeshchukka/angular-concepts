import { Component} from '@angular/core';
import { LoginService } from '../../../services/mysql/login service/login.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  })
export class LoginComponent {
public login_result: any;
constructor(private login_service: LoginService ) { }
public login(login_details: any): any {
    this.login_service.postLoginDetails(login_details).subscribe(res => {
      this.login_result = res;
    },
    (err: HttpErrorResponse) => {
if (err.error instanceof Error) {
  console.log('client side error');
} else {
  console.log('server side error');
}
    });
  }
}
