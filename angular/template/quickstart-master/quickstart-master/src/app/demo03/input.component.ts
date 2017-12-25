import { Component } from "@angular/core"

@Component({
    selector:"my-input",
    template:`
        <div>
            <h2>待做事项列表</h2>
            <input type="text" placeholder="请输入代做事项">
            <button>添加</button>
        </div>
    `
})

export class MyInputComponent{}