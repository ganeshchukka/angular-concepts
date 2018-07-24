import { Component } from '@angular/core';
// unit using karma (it an automation tool)
@Component({
  selector: 'app-utest',
  templateUrl: './utest.component.html'
  })
export class UtestComponent {
  private count: number;
  private my_array: Array<any>;
  constructor() {
    this.count = 0;
    this.my_array = ['angular', 'nodejs', 'mongodb'];
   }
   public increment(): number {
     return this.count = this.count + 1;
   }
   public decrement(): number {
    return this.count = this.count - 1;
  }
  }
