import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  pageTitle = "Vendor List" 
  vendors: Vendor[] = []

    constructor (
      private vendSvc: VendorService
    ){}

    ngOnInit(): void{ 
      this.vendSvc.list().subscribe({
        next: (res) => {
          console.debug("Vendors:", res);
          this.vendors = res;
        },
        error: (err) => {
          console.error(err);
        }
      })
    }
}


    
        
       
