import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { UserViewComponent } from './user-view/user-view.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UsernavComponent } from './usernav/usernav.component';


const myRoute:Routes=[
  {
    path: "",
    component:AdminLoginComponent
  },
  {
    path:"signup",
    component:UserRegisterComponent
  },
  {
    path:"Userlogin",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  
  {
    path:"view",
    component:BookViewComponent
  },
  
  {
    path:"search",
    component:BookSearchComponent
  },
  
  {
    path:"edit",
    component:BookEditComponent
  },
  
  {
    path:"issue",
    component:BookIssueComponent
  },
  {
    path:"userview",
    component:UserViewComponent
  },
  {
    path:"usersearch",
    component:UserSearchComponent
  }
  
  
    
     
  
  
  ]
  

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    BookEntryComponent,
    BookViewComponent,
    BookSearchComponent,
    BookEditComponent,
    BookIssueComponent,
    NavigationComponent,
    UserViewComponent,
    UserSearchComponent,
    UsernavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
