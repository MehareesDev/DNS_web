import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { CategoryUpdateComponent } from './category-update/category-update.component';

const routes: Routes = [{ path: '', component: DashboardComponent },
  { path: 'category/:parentId', component: DashboardComponent },
  { path: 'product-update', component: ProductUpdateComponent },
  { path: 'product-update/:id', component: ProductUpdateComponent },
  { path: 'product-update/:id/:parentId', component: ProductUpdateComponent },
  { path: 'category-update', component: CategoryUpdateComponent },
  { path: 'category-update/:id', component: CategoryUpdateComponent },
  { path: 'category-update/:id/:parentId', component: CategoryUpdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
