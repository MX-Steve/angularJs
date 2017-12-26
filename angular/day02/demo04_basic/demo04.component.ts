import {Component} from '@angular/core'

@Component({
  selector:'demo04',
  templateUrl:'./demo04.component.html'
   //template:`<h1>这是Demo04组件</h1>`
})

export class Demo04Component{
  // typescript语法支持类型的指定，通过冒号去指定当前变量的类型
  list:Array<any>=[1,2,3,4,5];
  count:number = 0;
  hasMore:boolean = true;
  
}