import { Component, OnInit } from '@angular/core';
import { PrintService } from "../service/test-print.service"
import { Router } from "@angular/router"

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls:['./../../css/common.css','./register.css'],
    providers:[PrintService]
})

export class RegisterComponent implements OnInit {
    constructor(private testLog:PrintService,private router:Router) { }

    ngOnInit() { }
    /**
     * 取出输入框中的值，进行相应操作
     */
    uname="";upwd = "";phone = "";addr = "";gender = 0;
    unameShow='';upwdShow="";cpwdShow='';num = 0;
    checkUname(name:string,str:string){
        if(str==""){
            this.unameShow = name+"不能为空";
            this.num += 1;
        }else{
            this.unameShow = "";
            this.num = 0;
        }
    }
    checkUpwd(name:string,str:string){
        if(str==""){
            this.upwdShow = name+"不能为空";
            this.num += 1;
        }else{
            this.upwdShow = "";
            this.num = 0;
        }
    }
    checkCpwd(name:string,str:string){
        if(str==""){
            this.cpwdShow = name+"不能为空";
            this.num += 1;
        }else if(str!=this.upwd){
            this.cpwdShow = "两次输入的密码不一致";
            this.num += 1;
        }else{
            this.cpwdShow = '';
            this.num = 0;
        }
    }
    submit(){
        console.log(this.uname+":"+this.upwd+":"+this.phone+":"+this.addr+":"+this.gender);
        this.router.navigate(['/login']);
    }
}