import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: "", component: DisplayProductsComponent },
  { path: "add", component: AddProductsComponent },
  { path: "edit", component: EditProductComponent },
  { path: "edit/:id", component: EditProductComponent },
  { path: "view", component: ViewProductComponent},
  { path: "view/:id", component: ViewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
