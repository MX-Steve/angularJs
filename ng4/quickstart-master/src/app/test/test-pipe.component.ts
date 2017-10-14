import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'testPipe',
    templateUrl: './testPipe.component.html'
})

export class TestPipeComponent implements OnInit {
    price=23.456;
    num = 122232;
    constructor() { }

    ngOnInit() { }
}