import {Pipe,PipeTransform} from "@angular/core"

@Pipe({
    name:'myCurrency'
})

export class MyPipe implements PipeTransform{
    transform(value: any, ...args: any[]): any {
		//必须有返回值
		//value管道操作符前面传来的数据
       if(value == 1)
        {
            return 'one';
        }
        else if(value == 2)
        {
            return 'two';
        }else{
            return "你好"
        }
	}
}