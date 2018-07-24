import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {
  private userDetails: FormGroup;


  constructor() {
    this.userDetails = new FormGroup({
        fname: new FormControl('', [Validators.required,
                                        Validators.minLength(6),
                                        Validators.maxLength(9)]),
        lname: new FormControl('chukka'),
        uemail: new FormControl(),
        addr: new FormGroup({
          ucity: new FormControl(),
          uaddr: new FormControl()
        }),
        gender: new FormControl(),
        ucountry: new FormControl()
    });
  }

  public clickMe() {
    console.log(this.userDetails.value);
  }



}
