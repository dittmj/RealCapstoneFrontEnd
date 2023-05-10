import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';


@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent {
  pageTitle = "Request Change";
  request!: Request;
  users!: User[];
  
  

  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.request.userId = +this.request.userId;
    console.debug("B4:", this.request);
    this.reqSvc.change(this.request.id, this.request).subscribe({
      next: (res) => {
        console.debug("Request Changed");
        this.request = res;
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void {
    this.userSvc.list().subscribe({
      next: (res) => {
        console.debug("Users:", res);
        this.users = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = this.route.snapshot.params["id"];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.request = res;
        this.request.id = this.request.id;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }
}
