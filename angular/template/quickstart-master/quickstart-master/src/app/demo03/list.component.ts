import { Component } from "@angular/core"

@Component({
    selector:"my-list",
    template:`
        <ul>
            <my-todo-item></my-todo-item>
            <my-todo-item></my-todo-item>
            <my-todo-item></my-todo-item>
        </ul>
    `
})

export class MyListComponent{}