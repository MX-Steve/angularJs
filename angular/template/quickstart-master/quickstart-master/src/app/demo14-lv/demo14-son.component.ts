import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo14-son',
    template:`
        <h1>子组件</h1>
        
    `
})

export class Demo14SonComponent implements OnInit {
    age:number = 20;

    constructor() { }

    ngOnInit() { }
}