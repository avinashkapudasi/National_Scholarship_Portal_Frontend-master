import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentapplicationsService {
  restURL: string;
  constructor(private myhttp:HttpClient) {
    this.restURL="http://localhost:8989/"
  
  }
   getapplicationList(): Observable<any> {
    return this.myhttp.get(`${this.restURL}Studentapplication`);
  }

  updateStatus(aadhar:string):Observable<Object>{
    
    return this.myhttp.put(`${this.restURL}ministry/applications/${aadhar}`,true);
  }
  //ShowDetails(email:String)
  //{
  //  return this.myhttp.get(`${this.restURL}candidate/`+`${email}`);
  //}
}
