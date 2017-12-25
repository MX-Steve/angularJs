import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls:['./../../css/common.css','./login.css']
})

export class LoginComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() { }
    uname="";upwd = "";unameShow='';upwdShow="";num = 0;
    checkUname(name:string,str:string){
        if(str==""){
            this.unameShow = name+"不能为空";
        }else{
            this.unameShow = "";
            this.num += 1;
        }
    }
    checkUpwd(name:string,str:string){
        if(str==""){
            this.upwdShow = name+"不能为空";
            
        }else{
            this.upwdShow = "";
            this.num += 1;
        }
    }
    submit(){
        console.log(this.uname+":"+this.upwd);
        this.router.navigate(['/main']);
    }
}