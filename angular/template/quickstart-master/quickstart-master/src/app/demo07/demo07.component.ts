import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07',
    templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {
    kw:string = ''
    constructor() { }

    ngOnInit() { }

    handleClick(){
        console.log("btn is clicked");
    }
    //input
    handleChangeBg(msg:any){
        console.log(msg);
    }
}