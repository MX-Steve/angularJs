//a-service-http
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * rxjs:
 */
@Injectable()
export class MyHttpService {
    constructor(private http: Http) { }
    sendRequest(url:string){
        // a-http-get==>携带凭证
        return this.http.get(url,{withCredentials:true})
            .map((response: Response) => response.json());
    }
}