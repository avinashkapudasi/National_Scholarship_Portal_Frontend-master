import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ministry } from './ministry';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  saveStudent(student:Object):Observable<Object>
  {
    return this.http.post("http://localhost:8989/registerstudent",student);
  }

  login(student:any):Observable<any>
  {
    return this.http.post("http://localhost:8989/loginstudent",student);
  }
  nodallogin(student:any):Observable<any>
  {
    return this.http.post("http://localhost:8989/nodallogin",student);
  }

  ministrylogin(ministry:any):Observable<any>
  {
    return this.http.post("http://localhost:8989/ministry/loginministry",ministry);
  }

  institutelogin(institute:any):Observable<any>
  {
    return this.http.post("http://localhost:8989/institutionlogin",institute);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('email')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('email')
  }

  getDealersList():Observable<any>{
    return this.http.get("http://localhost:8989/Students");
  }
}