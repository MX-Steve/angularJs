import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
    selector: 'detail',
    template:`
        <h1>detail</h1>
    `
})

export class DetailComponent implements OnInit {
    constructor(private route:ActivatedRoute) { }

    ngOnInit() { 
        //接收通过路由所传递来的参数
        //vue this.$router.params.pid;
        //console.log(this.route.params.value.pid);
        this.route.params.subscribe((result:any)=>{
            console.log(result);
        });

    }
}