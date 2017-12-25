import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo12-father',
    templateUrl: './demo12-father.component.html'
})

export class Demo12FatherComponent implements OnInit {
    userName:string = "jhon Reese";
    rcvMsg(msg:any){
        console.log("父组件接收到的数据为："+msg);
    }
    constructor() { }

    ngOnInit() { }
}