import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { User } from 'src/app/user/user.class';
import { Request} from '../request.class';
import { RequestService } from '../request.service';
import { RequestLine } from '../../requestline/requestlines.class';
import { RouterModule } from '@angular/router';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {
    pageTitle = "Request Lines";
    request!: Request;
    users: User[] = []
    requestLine!: RequestLine
    showVerifyRemove: boolean = false;

    constructor(
      private sys: SystemService,
      private reqSvc: RequestService,
      private router: Router, 
      private route: ActivatedRoute,
      private reqLSvc: RequestlineService
    ){}

    review(request: Request): void{
      if(request.status === "REVIEW"){
        request.status = "APPROVED";
      } else if(request.status === "APPROVED"){
        request.status = "REJECTED";
      }
      this.reqSvc.change(request.id, request).subscribe({
        next: (res) => {
          console.debug("Request reviewed", res);
          
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    remove(): void{
      this.showVerifyRemove = !this.showVerifyRemove;
    }
    removeVerified(): void{
      this.reqLSvc.remove(this.request.id).subscribe({
        next: (res) => {
          console.debug("Request Removed", res);
          this.router.navigateByUrl("/request/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

    ngOnInit(): void{
      let id = this.route.snapshot.params["id"];
      this.reqSvc.get(id).subscribe({
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
