import { Component, OnInit ,OnChanges,Input,DoCheck,OnDestroy} from '@angular/core';

@Component({
    selector: 'demo20',
    template: `
        <h1>this is demo20</h1>
    `
})

export class Demo20Component implements OnInit,OnChanges ,DoCheck,OnDestroy{
    @Input() myCount:number;
    @Input() myStu:any;
    constructor() { }

    ngOnInit() { 
        console.log("ngOnInit");
    }
    //当我们第一次实例化组件会调用的方法==>跟属性传值相关
    //可以检测输入属性的变化,粒度大
    //只能检测到非集合
    ngOnChanges(){
        console.log("ngOnChanges");
    }
    //粒度小==》可以检测到集合中数据的变化,可以检测到更小的变化
    ngDoCheck(){
        console.log("ngDoCheck");
    }
    //当组件销毁的时候会执行的函数
    ngOnDestroy(){
        console.log("ngOnDestroy");
    }
}