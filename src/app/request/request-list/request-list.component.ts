import { Component } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  pageTitle = "Request List";
  requests: Request[] = [];
  request!: Request;
  sortColumn: string = "id";
  sortAsc: boolean = true;

  constructor(
   private reqSvc: RequestService
  ) {}

  selectColumn(col: string): void{
    if(col === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortColumn = col;
  }
  review(request: Request): void{
     this.reqSvc.review(request.id, request).subscribe({
      next: (res) => {
        console.debug("Request Reviewed");
        this.refresh();
      }, 
      error: (err) => {
        console.error(err);
      }
     });
  }


  refresh(): void{
    this.reqSvc.list().subscribe({
      next: (res) => {
        console.debug("Requests:", res);
        this.requests = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnInit(): void{
    this.refresh();
  }
}
