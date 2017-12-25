import { Component, OnInit,Input , Output , EventEmitter } from '@angular/core';

@Component({
    selector: 'test-header',
    template: `
        <h1>{{toSon}}</h1>
    `
})

export class TestHeaderComponent implements OnInit {
    @Input() toSon:string="";
    @Output() toFatherEvent = new EventEmitter();
    isUserLogin:boolean = true;
    constructor() { }

    ngOnInit() { 
        setTimeout(()=>{
            this.toFatherEvent.emit(this.isUserLogin);
        },3000);
    }
}