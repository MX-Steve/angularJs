import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo09',
    templateUrl: './demo09.component.html'
})

export class Demo09Component implements OnInit {
    myOpacity:number=0;
    isTimerOn:boolean = false;
    changeOpacity(){
        if(!this.isTimerOn){
            var timer = setInterval(()=>{
                this.myOpacity+=0.02;
                console.log(this.myOpacity);
                if(this.myOpacity >= 1){
                    this.myOpacity=0;
                }
            },50);
            this.isTimerOn = true;
        }
        
    }
    constructor() { }

    ngOnInit() { }
}