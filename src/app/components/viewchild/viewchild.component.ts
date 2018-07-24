import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewchildchildComponent } from './viewchildchild/viewchildchild.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {
  @ViewChild(ViewchildchildComponent)
public _child: ViewchildchildComponent;
@ViewChild('fname')
  private fname: ElementRef;
  @ViewChild('lname')
 private lname: ElementRef;
 public clickMe() {
    this._child.msg1 = 'Message From Parent !';
    this._child.msg2 = 'Marquee Text From Parent !';
    this.fname.nativeElement.style.backgroundColor = 'green';
    this.fname.nativeElement.style.color = 'red';
    this.lname.nativeElement.style.backgroundColor = 'red';
    this.lname.nativeElement.style.color = 'green';
  }
}
