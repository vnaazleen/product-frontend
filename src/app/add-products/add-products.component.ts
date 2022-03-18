import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  product = new Product()

  constructor(private _router: Router, private _service: ProductService) { }

  ngOnInit(): void {
  }

  goToAllProducts() {
    this._router.navigate([""])
  }

  addProduct() {
    this._service.addProduct(this.product).subscribe
    (
      data => {
        console.log("Product " + this.product.productId + " added!") 
        this._router.navigate([""])
      },
      error => console.log(error)
    )
  }
}
