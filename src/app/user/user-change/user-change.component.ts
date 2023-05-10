import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent {
  user!: User;
  pageTitle = "User Change";
  

  constructor(
      private userSvc: UserService,
      private route: ActivatedRoute,
      private router: Router 
    ){}

    save(): void{
      this.userSvc.change(this.user.id, this.user).subscribe({
         next: (res) =>{
          console.debug("User Changed");
          this.user = res;
          this.router.navigateByUrl("/user/list");
         },
         error: (err) => {
          console.error(err);
         }
      });
    }

    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.userSvc.get(id).subscribe({
        next: (res) =>{
          console.debug("User:", res);
          this.user = res;
        },
        error: (err) =>{
          console.error(err);
        }
      });
    }
}



