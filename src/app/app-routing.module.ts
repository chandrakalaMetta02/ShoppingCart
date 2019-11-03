import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'',
    component:CategoryComponent,
   
  },
  {
    path:'cart',
    component:CartComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
