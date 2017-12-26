//a-module-routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:pid', component: DetailComponent },
  { path: 'index', component: IndexComponent },
  { path: 'main', component: MainComponent },
  { path: 'person', component: PersonComponent },
  { path: 'register', component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orderconfirm', component: OrderConfirmComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];