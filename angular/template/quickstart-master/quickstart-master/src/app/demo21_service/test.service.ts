import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

    constructor() { 
        console.log("in TestService Constructor");
    }
    /**
     * 服务是用来封装一些可重用的数据或方法
     */
    test(){
        console.log("it is a test");
    }
}