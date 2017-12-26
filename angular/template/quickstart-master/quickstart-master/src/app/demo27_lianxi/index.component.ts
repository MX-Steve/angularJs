import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'index',
    template:`<h1>index</h1>
        <button (click)="jump()">去main页面</button>
    `
})

export class IndexComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    jump(){
        this.router.navigateByUrl("/main");
    }
}