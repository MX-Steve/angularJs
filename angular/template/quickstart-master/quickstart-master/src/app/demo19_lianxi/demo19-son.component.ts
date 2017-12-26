import { Component, OnInit ,Input} from '@angular/core';

@Component({
    selector: 'demo19-son',
    templateUrl: './demo19-son.component.html'
})

export class Demo19SonComponent implements OnInit {
    @Input() myCount:number;//允许接收通过myCount属性传递过来的值，并保存在myCount的变量中
    //定义一个myList数组
    myList:Array<any> = [];
    constructor() { }

    ngOnInit() { 
        console.log("子组件接收到的数据为："+this.myCount);
        // setTimeout(()=>{},3000);
        for(var i=0;i<this.myCount;i++){
            this.myList.push(Math.floor(Math.random()*100+1));
        }
    }
}