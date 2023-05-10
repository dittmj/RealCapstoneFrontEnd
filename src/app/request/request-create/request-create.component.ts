import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {
  request: Request = new Request();
  users!: User[];
  pageTitle = "Request Create";
  constructor(
      private reqSvc: RequestService,
      private router: Router,
      private userSvc: UserService,
      private route: ActivatedRoute
    ){}
    save(): void{
      this.request.userId =+ this.request.userId;
      console.debug("B4:", this.request);
      this.reqSvc.create(this.request).subscribe({
        next: (res) => {
          console.debug("Request Created", res);
          this.request = res;
          this.router.navigateByUrl("/request/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    
    ngOnInit(): void{
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
    

