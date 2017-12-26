import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Location } from "@angular/common"

@Component({
    selector: 'person',
    template:`<h1>person</h1>
        <button (click)="jump()">去main页面</button>
        <button (click)="backToPrev()">返回上一页</button>
    `
})

export class PersonComponent implements OnInit {
    constructor(
        private router:Router,
        private myLoc:Location
    ) { }

    ngOnInit() { }
    
    jump(){
        this.router.navigateByUrl("/main");
    }

    backToPrev(){
        this.myLoc.back();
    }

}