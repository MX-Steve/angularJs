import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo06',
    templateUrl: "./demo06.component.html"
})

export class Demo06Component implements OnInit {
    stus:Array<any>= [
        {uname:"张三1",age:24,sex:"男",score:98},
        {uname:"张三2",age:20,sex:"女",score:88},
        {uname:"张三3",age:29,sex:"男",score:38},
        {uname:"张三4",age:18,sex:"女",score:58},
        {uname:"张三5",age:26,sex:"男",score:95}
    ]
    constructor() { }

    ngOnInit() { }
}