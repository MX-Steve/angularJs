import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo06',
  templateUrl: './demo06.component.html'
})

export class Demo06Component implements OnInit {
  stuList=[
    {
      age:20,
      sex:'male',
      score:81
    },
    {
      age:22,
      sex:'male',
      score:90
    },
    {
      age:21,
      sex:'female',
      score:70
    },
    {
      age:24,
      sex:'male',
      score:60
    },
    {
      age:27,
      sex:'female',
      score:100
    },
  ]
  constructor() { }

  ngOnInit() { }
}