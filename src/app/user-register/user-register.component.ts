import { Component } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  aadharno=""
  adress=""
    pincode=""
    dateofbirth=""
    emailid=""
    phoneno=""
    username=""
    password=""
    confirmpassword=""
  
    userSignup=()=>
    {
      let signup:any=
      {"name":this.name,"aadharno":this.aadharno,"adress":this.adress,"pincode":this.pincode,
      "dateofbirth":this.dateofbirth,"emailid":this.emailid,"phoneno":this.phoneno,
       "username":this.username,"password":this.password,"confirmpassword":this.confirmpassword}
         console.log(signup)
    
  
  }
  
  }
