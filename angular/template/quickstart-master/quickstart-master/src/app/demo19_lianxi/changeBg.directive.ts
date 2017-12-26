import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({ selector: '[changeBg]' })
export class ChangeBgDirective implements OnInit{
    constructor(private myER:ElementRef) { 
        console.log("this is  a test");
    }
    rc(){
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        var R = r.toString(16);
        var G = g.toString(16);
        var B = b.toString(16);
        //return `rgb(${r},${g},${b})`
        return '#'+R+G+B
    }
    //定义生命周期处理函数
    ngOnInit(){
        this.myER.nativeElement.style.backgroundColor = this.rc();
    }
}