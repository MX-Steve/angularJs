import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexChange'
})

export class SexChangePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if(value == 1){
            if(args[0]==true){
                return "男"
            }else{
                return "boy"
            }
        }else{
            if(args[0]==true){
                return "女"
            }else{
                return "girl"
            }
        }
        
        
    }
}