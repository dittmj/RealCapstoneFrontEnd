import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';
//import { RequestReviewListComponent } from './requestline/requestline-review/requestline-review.component';

const routes: Routes = [
  {path: "", redirectTo:"/user/list", pathMatch:"full"},
  {path: "user/list", component: UserListComponent},
  {path:"user/create", component: UserCreateComponent},
  {path:"user/change/:id", component: UserChangeComponent},
  {path:"user/detail/:id", component: UserDetailComponent},
  {path:"user/login", component: UserLoginComponent},
  {path:"vendor/list", component: VendorListComponent},
  {path:"vendor/detail/:id", component: VendorDetailComponent},
  {path:"vendor/create", component: VendorCreateComponent},
  {path:"vendor/change/:id", component: VendorChangeComponent},
  {path:"request/create", component: RequestCreateComponent},
  {path:"request/list", component: RequestListComponent},
  {path:"request/detail/:id", component: RequestDetailComponent},
  {path:"request/change/:id", component: RequestChangeComponent},
  {path:"request/review", component: RequestReviewComponent},
  {path:"product/list", component: ProductListComponent},
  {path:"product/create", component: ProductCreateComponent},
  {path:"product/detail/:id", component: ProductDetailComponent},
  {path:"product/change/:id", component: ProductChangeComponent},
  {path:"request/lines/:id", component: RequestLinesComponent},
  {path:"requestline/create/:id", component: RequestlineCreateComponent},
  {path:"requestline/edit/:id", component: RequestlineChangeComponent},
  {path:"request/review/item/:id", component: RequestReviewItemComponent}
 // {path:"requestline/review", component: RequestReviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
