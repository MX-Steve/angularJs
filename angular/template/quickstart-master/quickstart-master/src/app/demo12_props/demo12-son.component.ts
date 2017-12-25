import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
    selector: 'demo12-son',
    templateUrl: './demo12-son.component.html'
})

export class Demo12SonComponent implements OnInit {
    @Input() sonName="";
    //通过input装饰器，来接收指定属性的值
    @Input('sonAge') age=0;
    //通过output装饰器，定义一个事件触发器
    @Output() toFatherEvent = new EventEmitter();
    myInput:string = "";
    //调用方法，将用户输入的值发送给父组件
    sendMsg(){
        this.toFatherEvent.emit(this.myInput);
    }

    constructor() { }

    ngOnInit() { }
}