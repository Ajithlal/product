import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductGuardService } from './product-guard.service';
import { Product } from './product.service';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'products/:id', component: ProductDetailsComponent },
      {path: 'products', component: ProductListComponent },
    ])
  ],
  declarations: [ProductDetailsComponent, ProductListComponent],
  providers: [Product, ProductGuardService]
})
export class ProductsModule { }
