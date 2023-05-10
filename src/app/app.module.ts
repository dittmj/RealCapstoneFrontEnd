import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorChangeComponent } from './vendor/vendor-change/vendor-change.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MenubarComponent } from './menu/menubar/menubar.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductChangeComponent } from './product/product-change/product-change.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestChangeComponent } from './request/request-change/request-change.component';
import { SortPipe } from './pipe/sort.pipe';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './requestline/requestline-change/requestline-change.component';
//import { RequestReviewListComponent } from './requestline/requestline-review/requestline-review.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';


@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorDetailComponent,
    VendorChangeComponent,
    UserDetailComponent,
    UserListComponent,
    UserCreateComponent,
    UserChangeComponent,
    UserLoginComponent,
    MenubarComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestListComponent,
    RequestDetailComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    SortPipe,
    RequestLinesComponent,
    RequestlineCreateComponent,
    RequestlineChangeComponent,
    //RequestReviewListComponent,
    RequestReviewComponent,
    RequestReviewItemComponent
  ],
  imports: [

    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
