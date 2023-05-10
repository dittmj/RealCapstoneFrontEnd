import { Component } from '@angular/core';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { SystemService } from 'src/app/system/system.service';
import { RequestLine } from 'src/app/requestline/requestlines.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent {
  pageTitle = "Request Review List";
  requestLines: RequestLine[] = [];
  requests: Request[] = [];
 

  constructor(
    private reqSvc: RequestService,
    private sys: SystemService
  ) {}

  review(request: Request): void{
    if(request.status === "REVIEW"){
      request.status = "APPROVED";
    } else if(request.status === "APPROVED"){
      request.status = "REJECTED";
    }
    this.reqSvc.change(request.id, request).subscribe({
      next: (res) => {
        console.debug("Request reviewed", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  approve(request: Request): void {
    request.status = "APPROVED";
    this.reqSvc.change(request.id, request).subscribe({
      next: (res) => {
        console.debug("Request Approved", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  reject(request: Request): void {
    request.status = "REJECTED";
    this.reqSvc.change(request.id, request).subscribe({
      next: (res) => {
        console.debug("Request Rejected", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }


 refresh(): void{
   let userId = +this.sys.loggedInUser!.id;
   this.reqSvc.listReview(userId).subscribe({
     next: (res) => {
       console.debug("Requests:", res);
       this.requests = res;
     },
     error: (err) => {
       console.error(err);
     }
   });
 }
 ngOnInit(): void{
  this.sys.chkLogin();
   this.refresh();
 }

}

 


