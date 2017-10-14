import { Injectable } from '@angular/core';

@Injectable()
export class PrintService {
    isDev:boolean = true;
    constructor() { }
    print(msg:any){
        if(this.isDev){
            console.log(msg);
        }
    }
}