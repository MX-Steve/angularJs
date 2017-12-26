import { Component, OnInit } from '@angular/core';

//引入
import { TestService } from "./test.service"
import { MyLogService } from "./log.service"

@Component({
    selector: 'demo211',
    template:`
        <h1>demo211</h1>
        <button (click)="handleClick()">ClickMe</button>
    `,
    providers:[MyLogService]
})

export class Demo211Component implements OnInit {
    //实例化
    constructor(
        private myTS:TestService ,
        private log:MyLogService
        ) { 

    }

    ngOnInit() { 
        //调用服务中test的方法
        this.myTS.test();
    }
    handleClick(){
        this.log.print("今天天气不错");
    }
}