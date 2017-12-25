import { Component } from "@angular/core"

@Component({
    selector:"demo01",
    template:`<div>
        <h1>这是我的第一个组件</h1>
        <p>{{title}}</p>
    </div>`
})

export class Demo01Component {
    title:"今天真好!"
}