import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'Cart',component:CartComponent},
{path:'Signup',component:SignupComponent},
{path:'Login',component:LoginComponent},
{path:'Admin',component:GoodsComponent},
{path:'***',component:GoodsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
