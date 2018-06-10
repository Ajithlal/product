import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product';


@Injectable()
export class Product {
  private _productUrl = 'http://cmsapi/product.json';
  constructor(private _http: HttpClient) {

  }
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this._productUrl)
    .pipe(catchError(err => throwError(err)), tap(data => console.log(JSON.stringify(data))));
  }
  getProduct(id): Observable<IProduct> {
   return this.getProducts()
      .pipe(map((products: IProduct[]) => products.find(product => product.productId === id)));
  }
}
