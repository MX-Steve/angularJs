import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo05',
    templateUrl: './demo05.component.html'
})

export class Demo05Component implements OnInit {
    answer:string = "c"
    serverUrl:string = "http://tedu.cn"
    //构造函数
    constructor() { 
        //初始化一些简单的数据
    }

    ngOnInit() { 
        //初始化稍微复杂的数据
        console.log("in demo05 init");
    }
}