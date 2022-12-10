import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {

  constructor(private api:ApiService){

    api.userView().subscribe(


      (response)=>{

        this.user=response

      }
    )
  }

  user:any=[]

}
