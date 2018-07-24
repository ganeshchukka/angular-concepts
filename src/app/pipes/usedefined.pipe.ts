import { Pipe , PipeTransform } from '@angular/core';
@Pipe({
  name: 'reverse',
  })
export class ReversePipe implements PipeTransform {
transform(arg1) {
var data = '';
for ( var i = 0; i < data.length; i++) {
data = arg1[1] + data;
}
return data;
}
  constructor() { }
}


