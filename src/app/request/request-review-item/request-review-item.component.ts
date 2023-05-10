import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent {
    request!: Request
    id: number = 0;
    pageTitle = "Request Review Item"

    constructor(
      private reqSvc: RequestService,
      private route: ActivatedRoute,
      private router: Router
    ){}

    approve(request: Request): void{
      this.reqSvc.approve(request.id, request).subscribe({
        next: (res) => {
          console.debug("Request Approved", res);
          this.request.status = "APPROVED";
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    reject(): void{
      this.reqSvc.reject(this.request.id, this.request).subscribe({
        next: (res) => {
          console.debug("Request Rejected", res);
          this.request.status = "REJECTED"
          this.router.navigateByUrl("/request/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    ngOnInit(): void{
      this.id = this.route.snapshot.params["id"];
      this.reqSvc.get(this.id).subscribe({
        next: (res) => {
          console.debug("Request:", res);
          this.request = res;
         
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}
