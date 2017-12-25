import { Component } from '@angular/core'

@Component({
    selector:"demo04",
    templateUrl:`./demo04.component.html`
})
export class Demo04Component{
    //ts:支持类型的指定，通过:去指定当前变量的类型
    list:Array<any> =[11,22,33,44,55];
    myList:Array<any> = [11,22,33,44,55];
    count:number = 0;
    hasMore:boolean = true;
}