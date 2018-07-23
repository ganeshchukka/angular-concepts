import { Component , OnInit } from '@angular/core';
import { PhpService } from '../../services/php/php.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-php',
    templateUrl: './php.component.html'
})
export class PhpComponent implements OnInit {
    private result: any;
    constructor(private _service: PhpService) {
    }
    ngOnInit() {
        this._service.getEmployess().subscribe(res => {
            this.result = res;
        }, (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client Side Error !');
            } else {
                console.log('Server Side Error !');
            }
        });
    }
}