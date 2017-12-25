import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo16',
    templateUrl: './demo16-component.html'
})

export class Demo16Component implements OnInit {
    actorName:string="Jhone"
    nowDate = new Date();
    price  = 123.45;
    scale = 0.22346;
    tips  = "angular is a great framework!"

    constructor() { }

    ngOnInit() { }
}