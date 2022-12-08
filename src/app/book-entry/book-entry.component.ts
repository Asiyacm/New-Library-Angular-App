import { Component } from '@angular/core';

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






  readValue=()=>
  {
    let entryBook:any=
    {"title":this.title,"author":this.author,"language":this.language,"price":this.price,"description":this.description,"publisher":this.publisher,"distributor":this.distributor, "releasedyear":this.releasedyear,"bookimage":this.bookimage}
       console.log(entryBook)
  }



}
