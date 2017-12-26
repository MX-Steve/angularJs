import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from "./app.router"

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
import {ChangeBgDirective} from "./demo19_lianxi/changeBg.directive"
import { Demo20Component } from "./demo20_lifecycle/demo20.component"
import { Demo21Component } from "./demo20_lifecycle/demo21.component"
import { Demo211Component } from "./demo21_service/demo211.component"
import { TestService } from "./demo21_service/test.service"
import { MyLogService } from "./demo21_service/log.service"
import { Demo22Component } from "./demo22/demo22.component"
import { HeartBeatingService } from "./demo22/heart-beating.service"
import { Demo23Component } from "./demo23_http/demo23.component"
import { MyHttpService } from "./demo23_http/http.service"
import { Demo24Component } from "./demo24_lianxi/demo24.component"
import { SendHttpService } from "./demo24_lianxi/store-http.service"
import { RegisterComponent } from "./demo25_spa/register.component"
import {LoginComponent} from "./demo25_spa/login.component"
import {CartComponent} from "./demo26_spa/cart.component"
import {OrderConfirmComponent} from "./demo26_spa/order-confirm.component"
import { NotFoundComponent } from "./demo26_spa/not-found.component"
import { IndexComponent } from "./demo27_lianxi/index.component"
import { MainComponent } from "./demo27_lianxi/main.component"
import { PersonComponent } from "./demo27_lianxi/person.component"
import { ListComponent } from "./demo28_spa/list.component"
import { DetailComponent } from "./demo28_spa/detail.component"


@NgModule({
  imports:      [ BrowserModule ,FormsModule , HttpModule , AppRoutingModule ],
  declarations: [ 
    ListComponent , DetailComponent , 
    PersonComponent , MainComponent , IndexComponent ,
    CartComponent , OrderConfirmComponent , NotFoundComponent , 
    LoginComponent , RegisterComponent , 
    Demo23Component , Demo24Component , 
    Demo211Component , Demo22Component , 
    ChangeBgDirective , Demo21Component , Demo20Component , 
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
  bootstrap:    [ AppComponent ],
  providers:[TestService,MyLogService,HeartBeatingService,MyHttpService,SendHttpService]
})
export class AppModule { }
