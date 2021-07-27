import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategoryUpdateComponent } from './category-update/category-update.component';


@NgModule({
  declarations: [DashboardComponent, ProductUpdateComponent, CategoryUpdateComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
