import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  fetchProductList(): Observable<any> {
    return this._http.get<any>("http://localhost:8080/products")
  }

  fetchProductById(id: Number): Observable<any> {
    return this._http.get<any>("http://localhost:8080/products/" + id)
  }

  addProduct(product: Product): Observable<any> {
    return this._http.post<any>("http://localhost:8080/products", product)
  }

  editProduct(product: Product): Observable<any> {
    return this._http.post<any>("http://localhost:8080/products", product)
  }

  deleteProductById(id: Number): Observable<any> {
    return this._http.delete<any>("http://localhost:8080/products/" + id)
  }
}
