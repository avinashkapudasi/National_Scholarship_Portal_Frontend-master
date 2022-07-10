import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudenthomeService {
  constructor(private myhttp:HttpClient) { }
  restURL:string="http://localhost:8989/"
  ShowDetails(email:String)
  {
    return this.myhttp.get(`${this.restURL}candidate/`+`${email}`);
  }
}