import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  user: User = new User();
  pageTitle = "User Create";
  constructor(
      private userSvc: UserService,
      private router: Router
    ){}
    save(): void{
      this.userSvc.create(this.user).subscribe({
        next: (res) => {
          console.debug("User Created", res);
          this.user = res;
          this.router.navigateByUrl("/user/list");
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    ngOnInit(): void{}
}
