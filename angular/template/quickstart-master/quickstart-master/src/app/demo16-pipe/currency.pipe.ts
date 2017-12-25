import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myCurrency'
})

// 预期：20 |myCurrency:"$/￥..."
export class MyCurrencyPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return args[0]+value;
    }
}