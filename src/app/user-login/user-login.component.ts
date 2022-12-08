import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

 
  username=""
  password=""

  userLogin=()=>
  {
    let user:any=
    {"username":this.username,"password":this.password}
       console.log(user)
  

}

}
