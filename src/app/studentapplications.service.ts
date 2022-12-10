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
    return this.myhttp.get(`${this.restURL}studentsinnodal`);
  }

  updateStatus(application:any, newData: any):Observable<Object>{
    
    return this.myhttp.put(`${this.restURL}applications/${application.id}`,newData);
  }

  updateFinalStatus(application:any, newData: any):Observable<Object>{
    
    return this.myhttp.put(`${this.restURL}ministry/finalapproval/${application.id}`,newData);
  }

  deleteStudent(id:String):Observable<any> {

    return this.myhttp.delete(`${this.restURL}deletestudent/${id}`,{responseType:'text'})
  }

  getFinalApplicationList(): any {
    return this.myhttp.get(`${this.restURL}ministry/Studentapplicationministry`)
  }
}