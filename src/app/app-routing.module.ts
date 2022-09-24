import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componets/home/home.component';
import { ProductAddComponent } from './componets/product-add/product-add.component';
import { ProductEditComponent } from './componets/product-edit/product-edit.component';
import { ProductsComponent } from './componets/products/products.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
 {path:"home",component:HomeComponent},
 {path:"product-add",component:ProductAddComponent},
 {path:"product-edit/:id",component:ProductEditComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
