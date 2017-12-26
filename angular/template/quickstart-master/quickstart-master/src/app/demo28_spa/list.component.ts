import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
    selector: 'list',
    template:`
        <h1>list</h1>
        <hr />
        <ul>
            <li (click)="jump(tmp.id)" *ngFor="let tmp of myList; let myIndex = index">{{tmp.name}}</li>
        </ul>
    `
})
//a [routerLink] = "'/detail/'+tmp.id"
export class ListComponent implements OnInit {
    myList:Array<any>=[
        {name:"zhagnsan1",age:20,id:1},
        {name:"zhagnsan2",age:21,id:2},
        {name:"zhagnsan3",age:22,id:3},
        {name:"zhagnsan4",age:23,id:4},
        {name:"zhagnsan5",age:24,id:5}
    ];
    constructor(private router:Router) { }

    ngOnInit() { }

    jump(id:number){
        this.router.navigateByUrl("/detail/"+id);
    }
}