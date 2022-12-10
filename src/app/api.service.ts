import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchBook=()=>
  {

    return this.http.get("http://localhost:8080/view")
  }

  addBook=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

  searchBook=(dataToSend2:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend2)
  }

  deleteBook=(dataToSend3:any)=>
  {
    return this.http.post("http://localhost:8080/delete",dataToSend3)
  }

  userSignup=(dataToSend4:any)=>
  {
    return this.http.post("http://localhost:8080/usersignup",dataToSend4)
  }

  userView=()=>
  {
    return this.http.get("http://localhost:8080/userview")
  }
}
