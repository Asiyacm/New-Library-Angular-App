import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  name=""

  constructor(private api:ApiService){}
 SearchUser:any=[]
  readValue=()=>
{
  let data:any=
  {"name":this.name}
  console.log(data)

  this.api.userView().subscribe(

    (response:any)=>{

      console.log(response)
      if (response.length==0) {
        alert("Invalid user name")
        
      } else {
        this.SearchUser=response
        
      }
    }
   )

}


   deleteBtnClick1=(id:any)=>{

  let data:any={"id":id}
  this.api.deleteUser(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success")
      {
        alert("Deleted Successfully")
        this.SearchUser=[]
      }
      
  }
)

}
}

