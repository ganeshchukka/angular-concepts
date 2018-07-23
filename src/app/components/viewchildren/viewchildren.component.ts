import { Component, ViewChildren, QueryList } from '@angular/core';
import { ViewchildrenchildComponent } from './viewchildrenchild/viewchildrenchild.component';

@Component({
  selector: 'app-viewchildren',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {
@ViewChildren(ViewchildrenchildComponent)
private _child: QueryList<ViewchildrenchildComponent> = new QueryList();
private my_array: any;
public clickMe() {
  for ( var i = 0; i < this.my_array.length; i++) {
    this.my_array[i].var_one = 'Hello...!';
    this.my_array[i].var_two = 'Hi....!';
  }
}
ngAfterViewInit() {
  this.my_array = this._child.toArray();
}
}
