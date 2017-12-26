import { Component, OnInit } from '@angular/core';
import { MyHttpService } from "./http.service"

@Component({
    selector: 'demo23',
    template:`
        <h1>demo23</h1>
        <button (click)="loadData()">加载数据</button>
        `
})

export class Demo23Component implements OnInit {
    constructor(private myHttp:MyHttpService) { }

    ngOnInit() { }

    //点击后事件
    loadData(){
        //向服务器端发起 请求
        this.myHttp
            .sendRequest("http://127.0.0.1:8080/step04/admin/data/product/index.php")
            .subscribe(result=>{
                console.log(result);
            });
    }
}