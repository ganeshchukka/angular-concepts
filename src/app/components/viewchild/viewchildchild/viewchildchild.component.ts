import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchildchild.component.html',
  styleUrls: ['./viewchildchild.component.css']
})
export class ViewchildchildComponent implements OnInit {
public msg1: string;
public msg2: string;
  constructor() {
    this.msg1 = 'Defult msg from child compomnent';
    this.msg2 = 'Marquee text from child compomnent';
   }
  ngOnInit() {
  }

}
