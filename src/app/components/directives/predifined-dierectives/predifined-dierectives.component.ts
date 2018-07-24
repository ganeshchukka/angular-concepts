import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predifined-dierectives',
  templateUrl: './predifined-dierectives.component.html',
  styleUrls: ['./predifined-dierectives.component.css']
})
export class PredifinedDierectivesComponent implements OnInit {
  /* click directive start */
private count: number;
/* Switch directive start */
private my_number: number;
/* Switch directive close */
/* ngFor directive start */
private var_one: Array<number>;
private var_two: Array<any>;
private var_three: Array<any>;
/* ngFor directive close */
/* ngIf directive start */
private array: Array<string>;
/* ngIf directive close */
  constructor() {
        this.count = 0;
        this.my_number = 0;
        this.var_one = [10, 20, 30, 40, 50];
        this.var_two = [{p_id: 1, p_name: 'p_one', p_cost: 100 },
        {p_id: 2, p_name: 'p_two', p_cost: 200 },
        {p_id: 3, p_name: 'p_three', p_cost: 300 }];
        this.var_three = [{name: 'a', capital: 'xxx', 'flag': 'https://restcountries.eu/data/afg.svg'},
                         {name: 'b', capital: 'yyy', 'flag': 'https://restcountries.eu/data/ala.svg '},
                         {name: 'c', capital: 'zzz', 'flag': 'https://restcountries.eu/data/alb.svg'}];
        this.array = ['Hello_1', 'Hello_2', 'Hello_3', 'Hello_4', 'Hello_5'];
  }
  login(arg1, arg2 ) {
    if (arg1 === 'ganesh' && arg2 === 'chukka') {
      alert('login success');
    } else {
      alert('UserName or Password incorrect');
    }
    }
    signin(arg) {
      if ( arg.unme === 'chukka' && arg.upsd === 'sam') {
alert('Your login Successfully');
      } else {
alert ('please check your username or password');
      }
    }
    private login_details:any={'unme':"",'upsd':""};
    Login() {
      if (this.login_details.unme === 'admin' &&
          this.login_details.upsd === 'admin') {
alert('Login Successfully');
    } else {
      alert('UserName or Password incorrect');
    }
    }
    /* click directive close */
    /* submit directive start */
    login_one(arg3, arg4) {
if ( arg3 === 'chukka' && arg4 === 'ganesh') {
alert ('your login successfully');
} else {
  alert('please check your usename and password');
}
    }
    private register:any = { 'fname':'','lname':'',
    'uemail':'',
}
public my_fun() {

console.log(this.register);
}
    /* submit directive close */


    ngOnInit() {
  }
  }

