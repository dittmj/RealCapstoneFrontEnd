import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = "Product List";
  products: Product[] = [];

  constructor(
   private prodSvc: ProductService,
   
  ) {}
  ngOnInit(): void{
    this.prodSvc.list().subscribe({
      next: (res) => {
        console.debug("Products", res);
        this.products = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
