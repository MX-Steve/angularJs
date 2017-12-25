import { Directive ,ElementRef,OnInit,Input} from '@angular/core';

@Directive({ selector: '[hello]' })
export class HelloDirective implements OnInit{
    @Input() hello:any;
    constructor(private myER:ElementRef) { 
        console.log("in directive !");
    }
    ngOnInit(){
        console.log(this.myER.nativeElement);
        console.log(this.hello);
        //把调用指令时，传递来的参数，设置为当前元素的背景颜色
        this.myER.nativeElement.style.background = this.hello;
    }
}