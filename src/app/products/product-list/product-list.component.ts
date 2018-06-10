import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../product';
import { Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'My Products';
  errorMessage: string;
  filteredProducts: IProduct[];
  _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
  products: IProduct[];
showImage: Boolean = false;
  constructor(private _productService: Product) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(
       product => { this.products = product;
         this.filteredProducts = product;
       },
       error => this.errorMessage = <any>error
      );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  rateClicked($message) {
    this.pageTitle = 'Product List: '  + $message;
  }
}
