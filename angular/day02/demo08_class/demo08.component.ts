import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo08',
  templateUrl: './demo08.component.html',
  styleUrls:['./test.css']

})

export class Demo08Component implements OnInit {
  isUserLogin:boolean = true;
  myBgColor:string = '#0000ff';

  constructor() { }

  ngOnInit() { }

  //当input中的数据发生变化时 要调用的方法
  handleChangBg(msg:any){
    console.log('sth changed:'+msg);
    console.log(this.myBgColor);
  }
}