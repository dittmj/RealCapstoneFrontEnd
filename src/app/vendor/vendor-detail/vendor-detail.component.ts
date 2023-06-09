import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  vendor!: Vendor;
  pageTitle = "Vendor Detail";
  showVerifyRemove: boolean = false;
  constructor(
      private vendSvc:VendorService, 
      private route: ActivatedRoute,
      private router: Router 
    ) {}
    remove(): void{
      this.showVerifyRemove = !this.showVerifyRemove;
    }
    removeVerified(): void{
      this.vendSvc.remove(this.vendor.id).subscribe({
        next: (res) => {
          console.debug("Vendor Removed");
          this.router.navigateByUrl("/vendor/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    ngOnInit(): void {
       let id= Number(this.route.snapshot.params["id"]);
       this.vendSvc.get(id).subscribe({
        next: (res) => {
          console.debug("Vendor:", res);
          this.vendor = res;
        },
        error: (err) => {
          console.error(err);
        }
       })
    }
}
