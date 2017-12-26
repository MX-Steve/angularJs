// a-dir

import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({ selector: '[test]' })
export class TestDirective implements OnInit{
  constructor(private myER:ElementRef) {
    console.log('custom directive is called');
    console.log(this.myER);
    
   }

  ngOnInit(){
    console.log('in lifecycle hook init');
    this.myER.nativeElement.innerHTML
    ='Hello Cutsom Directive'
  } 
}