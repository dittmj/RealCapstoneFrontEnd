import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestlineService } from '../requestline.service';
import { RequestLine } from '../requestlines.class';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent {
    requestLine!: RequestLine;
    products!: Product[];
    pageTitle = "Request Line Change";

    constructor(
      private reqLSvc: RequestlineService,
      private route: ActivatedRoute,
      private router: Router,
      private prodSvc: ProductService
    ){}

    save(): void{
      this.requestLine.productId =+ this.requestLine.productId;
      console.debug("B4:", this.requestLine);
      this.reqLSvc.change(this.requestLine.id, this.requestLine).subscribe({
        next: (res) => {
          console.debug("Request Line Changed");
          this.requestLine = res;
          this.router.navigateByUrl("/request/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
    ngOnInit(): void{
      this.prodSvc.list().subscribe({
        next: (res) => {
          console.debug("Products:", res);
          this.products = res;
        },
        error: (err) => {
          console.error(err);
        }
        });
      let id = this.route.snapshot.params["id"];
      this.reqLSvc.get(id).subscribe({
        next: (res) => {
          console.debug("Request Line:", res);
          this.requestLine = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}
