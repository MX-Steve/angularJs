import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from "./register/register.component"
import { LoginComponent } from "./login/login.component"
import { MainComponent } from "./main/main.component"
import { ListComponent } from "./list/list.component"
import { DetailComponent } from "./detail/detail.component"
import { OrderComponent } from "./order/order.component"
import { NotfoundComponent } from "./notfound/notfound.component"

import { TestPipeComponent } from "./test/test-pipe.component"

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'main',component:MainComponent},
  {path:'list',component:ListComponent},
  {path:'detail',component:DetailComponent},
  {path:'order',component:OrderComponent},
  {path: 'test',component:TestPipeComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
