import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"

import { AppComponent }  from './app.component';
import { Demo01Component } from "./demo01/demo01.component"
import { Demo02Component } from "./demo02/demo02.component"
import { ItemComponent } from "./demo02/item.component"

import { MyBoxComponent } from "./demo03/box.component"
import { MyInputComponent } from "./demo03/input.component"
import { MyListComponent } from "./demo03/list.component"
import { MyItemComponent } from "./demo03/myItem.component"
import { Demo04Component } from "./demo04_basic/demo04.component"
import { Demo05Component } from "./demo05_directive/demo05.component"
import { Demo06Component } from "./demo06_lianxi/demo06.component"
import { Demo07Component } from "./demo07/demo07.component"
import { Demo09Component } from "./demo09_lianxi/demo09.component"
import { Demo10Component } from "./demo10_custom_directive/demo10.component"
import { TestDirective } from "./demo10_custom_directive/test.directive"
import { Demo11Component } from "./demo11_lianxi/demo11.component"
import { Demo12FatherComponent } from "./demo12_props/demo12-father.component"
import { Demo12SonComponent } from "./demo12_props/demo12-son.component"
import { TestMainComponent } from "./demo13-lianxi/main.component"
import { TestHeaderComponent } from "./demo13-lianxi/header.component"
import { Demo14ParentComponent } from "./demo14-lv/demo14-parent.component"
import { Demo14SonComponent }  from "./demo14-lv/demo14-son.component"
import { Demo15ParentComponent } from "./demo15_lianxi/demo15-parent.compnent"
import { Demo15SonComponent }  from "./demo15_lianxi/demo15-son.component"
import { Demo16Component } from "./demo16-pipe/demo16.component"
import { MyCurrencyPipe } from "./demo16-pipe/currency.pipe"
import { Demo17Component } from "./demo17_lianxi/demo17.component"
import { SexChangePipe } from "./demo17_lianxi/sex-change.pipe"
import { Demo18Component } from "./demo18_custom_directive/demo18.component"
import { HelloDirective } from "./demo18_custom_directive/hello.directive"
import { Demo19ParentComponent } from "./demo19_lianxi/demo19-parent.component"
import { Demo19SonComponent }  from "./demo19_lianxi/demo19-son.component"

@NgModule({
  imports:      [ BrowserModule ,FormsModule ],
  declarations: [ 
    Demo19ParentComponent,Demo19SonComponent,
    Demo18Component,HelloDirective,
    Demo17Component,SexChangePipe,
    Demo16Component,MyCurrencyPipe , 
    Demo15ParentComponent,Demo15SonComponent,
    Demo14ParentComponent,Demo14SonComponent,
    Demo12FatherComponent, Demo12SonComponent , TestMainComponent,TestHeaderComponent,
    Demo10Component,TestDirective,Demo11Component , 
    Demo04Component,Demo05Component , Demo06Component , Demo07Component ,Demo09Component ,
    AppComponent , Demo01Component,Demo02Component,ItemComponent
    ,MyBoxComponent,MyInputComponent,MyListComponent, MyItemComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
