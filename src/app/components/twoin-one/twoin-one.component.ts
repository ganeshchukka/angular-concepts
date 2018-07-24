import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-twoin-one',
  templateUrl: './twoin-one.component.html',
  styleUrls: ['./twoin-one.component.css']
})
export class TwoinOneComponent implements OnInit {
private var_two;
  constructor() { this.var_two = 'I am from root page'}

  ngOnInit() {
  }

}
