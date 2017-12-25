import { Component, OnInit , ViewChild } from '@angular/core';

@Component({
    selector: 'demo14-parent',
    template:`
        <h1>父组件</h1>
        <p>{{"子组件中的age是："+mySon.age}}</p>
        <button (click)="handleClick(mySon)">clickMe</button>
        <hr>
        <demo14-son #mySon></demo14-son>
    `
})

export class Demo14ParentComponent implements OnInit {
    @ViewChild('mySon') mySon:any;

    //按钮按下获取子组件的值
    handleClick(myObject:any){
        //无法通过本地变量mySon去得到子组件实例的
        console.log(myObject);
        console.log(this.mySon);
    }

    constructor() { }

    ngOnInit() {
    }
}