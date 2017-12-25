import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
    selector: 'demo15-parent',
    template:`
        <h1>父组件</h1>
        <hr/>
        <button (click)="start(mySon)">开始</button>
        <button (click)="end(mySon)">结束</button>
        <demo15-son #mySon></demo15-son>
    `
})

export class Demo15ParentComponent implements OnInit {
    @ViewChild('mySon') mySon:any;
    start(obj:any){
        obj.getStart();
        this.mySon.getStart();
    }
    end(obj:any){
        obj.getEnd();
        this.mySon.getEnd();
    }

    

    constructor() { }

    ngOnInit() {
    }
}