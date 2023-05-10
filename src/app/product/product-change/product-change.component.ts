import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { MenubarComponent } from 'src/app/menu/menubar/menubar.component';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent {
  pageTitle = "Product Change"
  product!: Product;
  vendors!: Vendor[];

  constructor(
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    console.debug("B4:", this.product);
    this.prodSvc.change(this.product.id, this.product).subscribe({
      next: (res) => {
        console.debug("Product Changed");
        this.product = res;
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void{
    this.vendSvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
      let id = this.route.snapshot.params["id"];
      this.prodSvc.get(id).subscribe({
        next: (res) => {
          console.debug("Product:", res);
          this.product = res;
          this.product.partNbr = this.product.partNbr.substring(0, 10000);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}



