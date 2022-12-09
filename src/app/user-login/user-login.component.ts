import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

 
  username=""
  password=""

  constructor(private route:Router){}

  userLogin=()=>
  {
    let user:any=
    {"username":this.username,"password":this.password}
       console.log(user)
       if (this.username=="username" && this.password=="password") {
        this.route.navigate(['/usersearch'])
        
      } else {
        alert("Invalid credential")
        
      }
  

}

}
