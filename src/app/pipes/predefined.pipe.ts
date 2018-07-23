import { Component, OnInit } from '@angular/core';
import { ReversePipe } from './usedefined.pipe';
@Component({
  selector: 'app-predefined',
  templateUrl: './predefined.pipe.html',
  })
export class PredifinedPipeComponent implements OnInit {
private var_one = 'chukka';
private var_two = 'Angular6';
private var_three = 'BOOTSTRAP';
private var_four = 100.1256;
private var_five: Date = new Date();
private var_six = 300;
private var_seven = {
p_id: 3,
p_name: 'ccc',
p_cost: 300
};
private var_eight: Array<number> = [10, 20, 30 ];
private data = 'Welcome';
  constructor() { }
  ngOnInit() {
  }

}
