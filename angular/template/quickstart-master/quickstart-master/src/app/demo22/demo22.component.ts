import { Component, OnInit } from '@angular/core';
import { HeartBeatingService } from "./heart-beating.service"
@Component({
    selector: 'demo22',
    template:`
        <h1>demo22</h1>
        <button (click)="start()">开始心跳</button>
        <button (click)="end()">结束心跳</button>
    `
})

export class Demo22Component implements OnInit {
    constructor(private hb:HeartBeatingService) { }

    ngOnInit() { }
    start(){
        this.hb.start();
    }
    end(){
        this.hb.stop();
    }
}