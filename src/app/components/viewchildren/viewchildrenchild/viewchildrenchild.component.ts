import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchildrenchild',
  templateUrl: './viewchildrenchild.component.html',
  styleUrls: ['./viewchildrenchild.component.css']
})
export class ViewchildrenchildComponent implements OnInit {
public var_one: string;
public var_two: string;
  constructor() {
    this.var_one = 'message from child component';
    this.var_two = 'marquee text from child component';
   }
  ngOnInit() {
  }

}
