import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SendHttpService {
    constructor(private http: Http) { }
    sendHttp(url:string){
        return this.http.get(url,{withCredentials:true})
            .map((response: Response) => response.json());
    }
}