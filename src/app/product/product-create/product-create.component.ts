import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent {
  product: Product = new Product();
  pageTitle = "Product Create";
  vendors!: Vendor[];
  constructor(
      private prodSvc: ProductService,
      private router: Router,
      private vendSvc: VendorService,
      private route: ActivatedRoute
    ){}
    save(): void{
      this.product.vendorId =+ this.product.vendorId;
      console.debug("B4:", this.product);
      this.prodSvc.create(this.product).subscribe({
        next: (res) => {
          console.debug("Product Created", res);
          this.product = res;
          this.router.navigateByUrl("/product/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    ngOnInit(): void{
      this.vendSvc.list().subscribe({
        next: (res) => {
          console.debug("Vendors:", res);
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
          this.product.id = this. product.id;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
}
