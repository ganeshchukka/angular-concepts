import { Component } from "@angular/core";
import { StaticFileService } from '../../services/static/static.service';
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"app-static",
    templateUrl: './static.file.component.html'
})
export class StaticFileComponent{
    private result:any;
    constructor(private _service: StaticFileService){
    }
    ngOnInit(){
        this._service.getProducts().subscribe(res=>{
            this.result = res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error");
            }else{
                console.log("Server Side Error");
            }
        });
    }
}