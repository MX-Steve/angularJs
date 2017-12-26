import { Injectable } from '@angular/core';

@Injectable()
export class HeartBeatingService {
    timer:any;
    //法2：是否运行
    myTimerOn:boolean = false;
    //开始心跳
    start(){
        if(this.timer){
            return;
        }
        /**
         * 
         *  if(this.myTimerOn){
             return;
            }
         */
        //this.myTimerOn = true;
        this.timer = setInterval(()=>{
            console.log("beating...")
        },500);
    }
    //结束心跳
    stop(){
        //this.myTimerOn = false;
        clearInterval(this.timer);
        this.timer=null;
    }
    constructor() { }
}