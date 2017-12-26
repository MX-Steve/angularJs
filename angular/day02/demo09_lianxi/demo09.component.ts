import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo09',
  templateUrl: './demo09.component.html'
})

export class Demo09Component implements OnInit {
  opacityValue=0.1;
  //记录定时器是否在运行
  isTimerOn:boolean = false;

  constructor() { }

  ngOnInit() { }

  //点击按钮时 调用的方法，在该方法中
  //启动一个定时器 修改透明度的值
  changeOpacity(){
    if(this.isTimerOn){
      return;
    }
    setInterval(()=>{
      //修改数据
      this.opacityValue+=0.1;
      //临界值的判断
      if(this.opacityValue>1){
        this.opacityValue = 0;
      }
    },500);

    this.isTimerOn = true;
  }
  
}