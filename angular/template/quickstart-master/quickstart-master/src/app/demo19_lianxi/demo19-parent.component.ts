import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo19-parent',
    templateUrl: './demo19-parent.component.html'
})

export class Demo19ParentComponent implements OnInit {
    count:number = 0;
    constructor() { }

    ngOnInit() { }
}