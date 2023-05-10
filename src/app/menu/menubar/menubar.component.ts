import { Component } from '@angular/core';
import { Menu } from '../menu.class';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  
  
  
  menus: Menu[] = [
    new Menu("User", "/user/list"),
    new Menu("Request", "/request/list"),
    new Menu("Product", "/product/list"),
    new Menu("Vendor", "/vendor/list"),
    new Menu("Login", "/user/login"),
    new Menu("Request Review", "/request/review")
  ]
}

