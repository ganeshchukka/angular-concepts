import { Component, OnInit} from '@angular/core';
import { CustomerService } from '../../../services/calls/serices/customers.service';
import { CountriesService } from '../../../services/calls/serices/countries.service';
@Component ({
  selector: 'app-servicecomponent',
  // templateUrl:'./service.component.htm'
  template: `<h3 style='color:blue'>{{result_one | json}}</h3>
    <h3 style='color:green'>{{result_two | json}}</h3>`
  })
export class SeriesServicesComponent implements OnInit {
public result_one: any;
public result_two: any;
constructor(private _service_one: CustomerService, private _service_two: CountriesService) {}
ngOnInit() {
    this._service_one.getCustomers().subscribe(res => {this.result_one = res; });
        // make call two
        this._service_two.getCountries().subscribe(res1 => {this.result_two = res1; });
//         (err.HttpErrorResponse) => {
// if (err.error instanceof Error) {
// console.log('client side error');
// } else
// {
// console.log('server side error');
// }
//         }
//     }

//                (err.HttpErrorResponse) => {
//             if (err.error instanceof Error) {
//             console.log('client side error');
//             } else
//             {
//             console.log('server side error');
//             }
//         }
    }
}
