import { Injectable } from '@angular/core';

@Injectable()
export class MyLogService {
    isDev:boolean = true;//定义一个变量，来决定是否允许输出日志信息
    constructor() {}
    //希望在服务中，能够封装一个方法，用来控制是否输出信息
    print(msg:any){
        if(this.isDev){
            console.log(msg);
        }
    }
}