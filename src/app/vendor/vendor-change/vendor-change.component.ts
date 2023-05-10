import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent {
  vendor!: Vendor;
  pageTitle = "User Change";

  constructor(
      private vendSvc: VendorService,
      private route: ActivatedRoute,
      private router: Router 
    ){}

    save(): void{
      this.vendSvc.change( this.vendor).subscribe({
         next: (res) =>{
          console.debug("Vendor Changed");
          this.router.navigateByUrl("/vendor/list");
         },
         error: (err) => {
          console.error(err);
         }
      });
    }

    ngOnInit(): void {
      let id = this.route.snapshot.params["id"];
      this.vendSvc.get(id).subscribe({
        next: (res) =>{
          console.debug("Vendor:", res);
        },
        error: (err) =>{
          console.error(err);
        }
      })
    }
}
