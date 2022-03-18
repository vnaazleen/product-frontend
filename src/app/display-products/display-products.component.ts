import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  _productList !: Product[];
  constructor(private _service: ProductService, private _route: Router) { }

  ngOnInit(): void {
    this._service.fetchProductList().subscribe(
      data=>{
        this._productList = data;
        console.log("Response recieved")
        console.log(data)
      },
      error=>console.log("Exception occured")
    )
  }

  deleteProduct(id: Number) {
    this._service.deleteProductById(id).subscribe(
      data => {
        console.log(data)
        this._route.navigate([''])
      },
      error => console.log(error)
    )

    location.reload(); 
  }

  goToAddProduct() {
    this._route.navigate(['/add'])
  }

  goToEditProduct(id: Number) {
    this._route.navigate(['/edit', id])
  }

  goToViewProduct(id: Number) {
    this._route.navigate(['/view', id])
  }
}
