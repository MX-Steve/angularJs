import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo07',
  templateUrl: './demo07.component.html'
})

export class Demo07Component implements OnInit {
  myInput:string = "";
  constructor() { }

  ngOnInit() { }

  //定义一个按钮按下时 要执行的回调函数
  handleClick(){
    console.log('btn is clicked');
  }
}