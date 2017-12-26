import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo21',
    template: `
        <h1>this is demo21</h1>
        <button (click)="modifyData()">修改demo21中的数据</button>
        <demo20 
        *ngIf="stu.age<25"
        [myCount]="count" 
        [myStu]="stu"></demo20>
    `
})

export class Demo21Component implements OnInit {
    count = 0;
    stu = {name:"zhangsan",age:20,sex:"male"};
    modifyData(){
        //this.count++;
        this.stu.age++;
    }
    constructor() { }

    ngOnInit() { }
}