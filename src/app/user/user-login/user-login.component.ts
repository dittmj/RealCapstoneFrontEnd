import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system/system.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  pageTitle= "User Login";
  password: string = "";
  username: string = "";
  message: string = "";
 
  constructor(
    private sys: SystemService,
    private userSvc: UserService,
    private router: Router,
   
  ){}
  login(): void{
    this.message = "";
    this.userSvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login Successful");
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        if(err.status === 404){
          this.message = "Username/Password not found!"
        } else {
        console.error(err);
      }
     }
    })
  }
 
  ngOnInit(): void{
    
    this.sys.loggedInUser = null;
   
 }
}
  
 
