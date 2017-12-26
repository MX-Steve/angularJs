import {Component} from '@angular/core'

@Component({
  selector:'testInput',
  template:`
    <h1>这是ToDoInput组件</h1>
    <input type="text"/>
    <button>add</button>
  `
})

export class InputComponent{}