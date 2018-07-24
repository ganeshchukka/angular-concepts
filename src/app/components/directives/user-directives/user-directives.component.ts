import {Directive,ElementRef,Input,HostListener, Component} from '@angular/core';
@Component({
  templateUrl: './user-directives.component.html',
  styleUrls: ['./user-directives.component.css']
})
@Directive({
	selector:'[myDir]'
  })
export class UserDirectivesComponent {
	 // @Input() var_one;
  // @Input() var_two;
   constructor(private _el:ElementRef/*private _templateRef:TemplateRef<any>,
                private _viewContainerRef:ViewContainerRef*/){}
      // public hiliteColor(color){
   //      this._el.nativeElement.style.backgroundColor=color;
   // }
   @HostListener('mouseenter') onmouseenter(){
        this._el.nativeElement.style.backgroundColor="green";
   }
   @HostListener('mouseleave') onmouseleave(){
        this._el.nativeElement.style.backgroundColor='blue';
   }
   /*sturctal directive code*/
    //   @Input() set myDir(isHidden:boolean){
    //     if(isHidden){
    //         this._viewContainerRef.createEmbeddedView(this._templateRef);
    //     }else{
    //         this._viewContainerRef.clear();
    //     }
    // }
}
