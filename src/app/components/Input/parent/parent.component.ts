import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public products: Array<any>;
  constructor() {
    this.products = [
{'p_id': 1, 'p_name': 'A', 'p_cost': 111 },
{'p_id': 2, 'p_name': 'B', 'p_cost': 222 },
{'p_id': 3, 'p_name': 'C', 'p_cost': 333 }
    ];
   }

  ngOnInit() {
  }
public clickMe(products) {
return alert(products);
}
}