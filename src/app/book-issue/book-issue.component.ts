import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {

  name=""
  title=""
  dateofissue=""
  membershipno=""
  
  
  bookIssue=()=>
  {
    let issue:any=
    {"name":this.name,"title":this.title,"dateofissue":this.dateofissue,"membershipno":this.membershipno}
    console.log(issue)
  }
  
  
  }
