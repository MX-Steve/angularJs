import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'test-main',
    template: `
        <test-header 
            (toFatherEvent)="rcvResult($event)"
            toSon="这是主页"></test-header>
        <hr/>
        <ul *ngIf="isLogin">
            <li *ngFor="let tmp of myList">{{tmp}}</li>
        </ul>
        
    `
})

export class TestMainComponent implements OnInit {
    isLogin:boolean = false;
    myList:Array<any>=['张三',28,98,128];

    rcvResult(result:any){
        console.log("main中收到的结果为："+result);
        this.isLogin = result;
    }

    constructor() { }

    ngOnInit() { }
}