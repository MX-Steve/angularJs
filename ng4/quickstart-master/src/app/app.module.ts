import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app.router'

import { AppComponent }  from './app.component';
import { RegisterComponent } from "./register/register.component"
import { LoginComponent } from "./login/login.component"
import { MainComponent } from "./main/main.component"
import { ListComponent } from "./list/list.component"
import { DetailComponent } from "./detail/detail.component"
import { OrderComponent } from "./order/order.component"
import { NotfoundComponent } from "./notfound/notfound.component"
import { FooterComponent } from "./footer/footer.component"
import { HeaderComponent } from "./header/header.component"
import { MainBodyComponent } from "./main/main-body.component"

import { TestPipeComponent } from "./test/test-pipe.component"
import { MyPipe } from "./test/my-pipe.pipe"

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule,FormsModule ],
  declarations: [ AppComponent,RegisterComponent,LoginComponent,
  MainComponent,MainBodyComponent,ListComponent,DetailComponent,
  OrderComponent,NotfoundComponent,
  FooterComponent,HeaderComponent,
  TestPipeComponent,MyPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
