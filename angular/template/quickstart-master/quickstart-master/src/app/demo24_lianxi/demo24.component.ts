import { Component, OnInit } from '@angular/core';
import { SendHttpService } from "./store-http.service"

@Component({
    selector: 'demo24',
    template:`<h1>demo24</h1>
        <p>{{loginResult}}</p>
    `
})

export class Demo24Component implements OnInit {
    loginResult:string=""
    constructor(private myHttp:SendHttpService) { }

    ngOnInit() { 
        this.myHttp.sendHttp("http://127.0.0.1:8080/step04/admin/data/user/session_data.php")
            .subscribe(result=>{
                console.log(result);
                if(result.uid){
                    this.loginResult = "欢迎回来，"+result.uname;
                }else{
                    this.loginResult = "请去登录";
                }
            });
    }
    
}