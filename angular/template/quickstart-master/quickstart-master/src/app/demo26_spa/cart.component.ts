import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'cart',
    template:`
        <h1>这是购物车页面</h1>
        <button (click)="jump()">结算</button>
        <a routerLink="/orderconfirm">去结算吧</a>
    `
})

export class CartComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }

    jump(){
        //去订单确定页面
        this.router.navigateByUrl("/orderconfirm");
    }

}