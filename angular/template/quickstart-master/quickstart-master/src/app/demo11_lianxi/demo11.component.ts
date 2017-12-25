import { Component,OnInit } from "@angular/core"

@Component({
    selector:"demo11",
    templateUrl:"./demo11.component.html"
})

export class Demo11Component implements OnInit{
    isAgree:boolean = false;
    userInput:string = "";
    inputHistoryList:Array<any>=[];//保存输入的所有记录
    //将用户当前输入添加到当前数组
    saveToHistory(){
        this.inputHistoryList.push(this.userInput);
    }
    constructor(){}

    ngOnInit(){}
}