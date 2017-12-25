import { Component } from "@angular/core"

@Component({
    selector:"my-todo-item",
    template:`
        <li>
            <button>删除</button>
            <span>吃饭</span>
        </li>
    `
})

export class MyItemComponent{}