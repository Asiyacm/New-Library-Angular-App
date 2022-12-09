import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  author=""
  language=""
  price=""
  description=""
  publisher=""
  distributor=""
  releasedyear=""
  bookimage=""



  constructor(private api:ApiService){}


  readValue=()=>
  {
    let addBook:any=
    {"title":this.title,"author":this.author,"language":this.language,"price":this.price,"description":this.description,"publisher":this.publisher,"distributor":this.distributor, "releasedyear":this.releasedyear,"bookimage":this.bookimage}
       console.log(addBook)

       this.api.addBook(addBook).subscribe(

        (response:any)=>{
  
          console.log(response)
  
          if (response.status=="success") {
  
            alert("Book Added Sucessfully")
  
            this.title=""
            this.author=""
            this.language=""
            this.price=""
            this.description=""
            this.publisher=""
            this.distributor=""
            this.releasedyear=""
            this.bookimage=""
           
          } else {
            alert("Something Went Wrong")
          }
        }
       )
  
    }
  }
  
