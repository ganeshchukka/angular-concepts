import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appCustomDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomDirectiveDirective,
      multi: true
    }]
})
export class CustomDirectiveDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any} | null {
return control.value === '-1' ? {'defauldSelected': true} : null;
  }
}
