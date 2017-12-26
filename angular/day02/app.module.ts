import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent }  from './app.component';
import { Demo01Component }  from './demo01/demo01.component'
import {Demo02Component} from './demo02/demo02.component'
import {ItemComponent} from './demo02/item.component'
import {BoxComponent} from './demo03/box.component'
import {InputComponent} from './demo03/input.component'
import {ListComponent} from 
'./demo03/list.component'
import {MyItemComponent} from 
'./demo03/myItem.component'
import {Demo04Component} from
'./demo04_basic/demo04.component'
import {Demo05Component} from 
'./demo05_directive/demo05.component'
import {Demo06Component} from 
'./demo06_lianxi/demo06.component'
import {Demo07Component} from
'./demo07_bind/demo07.component'
import {Demo08Component} from 
'./demo08_class/demo08.component'
import {Demo09Component} from 
'./demo09_lianxi/demo09.component'
import {Demo10Component} from './demo10_custom_directive/demo10.component'
import {TestDirective} from './demo10_custom_directive/test.directive'

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [
     TestDirective,
     Demo10Component,
     Demo09Component,
     Demo08Component,
     Demo07Component,
     Demo06Component,
     Demo05Component,
     Demo04Component,
     MyItemComponent,
     ListComponent,
     InputComponent,
     BoxComponent,
     AppComponent,
     Demo01Component,
     Demo02Component,
     ItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
