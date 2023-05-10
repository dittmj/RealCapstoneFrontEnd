import { Component } from '@angular/core';
import { SystemService } from 'src/app/system/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';
//import { Request } from 'src/app/request/request.class';
//import { RequestService } from 'src/app/request/request.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  pageTitle = "User List"; 
  users: User[] = []

    constructor (
      private userSvc: UserService,
      private sys: SystemService,
     // requests: Request[] = [],
     // sortColumn: string = "id",
     // sortAsc: boolean = true,
     // private reqSvc: RequestService
    
    ){}
   

    ngOnInit(): void{ 
      this.sys.chkLogin();
      if(this.sys.loggedInUser !== null){
        console.log("Someone is logged in");
      } else {
        console.log("No one is logged in");
      }
      this.userSvc.list().subscribe({
        next: (res) => {
          console.debug("Users:", res);
          this.users = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}
