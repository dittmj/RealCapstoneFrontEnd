import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { RequestLine } from 'src/app/requestline/requestlines.class';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent {

    requestLine: RequestLine = new RequestLine();
    pageTitle = "Request Line Create";
    products!: Product[];

    constructor(
      private reqLSvc : RequestlineService,
      private router: Router,
      private prodSvc: ProductService,
      private route: ActivatedRoute
    ){}
    save(): void{
      this.requestLine.productId =+ this.requestLine.productId;
      console.debug("B4:", this.requestLine);
      this.reqLSvc.create(this.requestLine).subscribe({
        next: (res) => {
          console.debug("Request Line Created", res);
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
            this.requestLine.id = this.requestLine.id;
          },
          error: (err) => {
            console.error(err);
          }
        })
      }
    }

