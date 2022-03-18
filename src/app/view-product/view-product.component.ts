import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

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

}
