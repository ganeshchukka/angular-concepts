import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    constructor() { }
@Input() p_id;
@Input() p_name;
@Input() p_cost;
@Output() sendData: EventEmitter<any> = new EventEmitter(); // here we create event emiter
  ngOnInit() {
  }
  public clickMe() {
this.sendData.emit(this.p_id + '...' + this.p_name + '....' + this.p_cost);
  }
}
