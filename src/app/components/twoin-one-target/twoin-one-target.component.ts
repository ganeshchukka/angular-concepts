import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-twoin-one-target',
  templateUrl: './twoin-one-target.component.html',
  styleUrls: ['./twoin-one-target.component.css']
})
export class TwoinOneTargetComponent implements OnInit {
  // private result: any;
  private var_two: string;

  constructor(private _route: ActivatedRoute) {}
        // this.result = this._route.snapshot.params['message'];
  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this.var_two = params.get('message');
    });
  }

}
