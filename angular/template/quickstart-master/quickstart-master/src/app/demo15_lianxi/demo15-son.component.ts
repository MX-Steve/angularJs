import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo15-son',
    template:`
        <h1>子组件</h1>
        
    `
})

export class Demo15SonComponent implements OnInit {

    getStart(){
        console.log("开始");
    }
    getEnd(){
        console.log("结束");
    }

    constructor() { }

    ngOnInit() { }
}