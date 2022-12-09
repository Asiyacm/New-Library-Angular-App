import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent {

  constructor(private api:ApiService){

    api.fetchBook().subscribe(


      (response)=>{

        this.books=response

      }
    )
  }


  books:any=[]

}
