import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product = new Product()

  constructor(private _router: Router, private _service: ProductService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this._activatedRoute.snapshot.paramMap.get('id'))
    this._service.fetchProductById(id).subscribe(
      data => {
        console.log("Product " + id + " is received")
        this.product = data
      },
      error => console.log(error)
    )
  }

  goToAllProducts() {
    this._router.navigate([""])
  }

  updateProduct() {
    this._service.editProduct(this.product).subscribe
    (
      data => {
        console.log("Product " + this.product.productId + " edited succesfully")
        this.goToAllProducts()
      },
      error => console.log(error)
    )
  }

}
