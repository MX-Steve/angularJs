import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main',
    template:`<h1>main</h1>
        <a routerLink="/person">去个人中心</a>
    `
})

export class MainComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}