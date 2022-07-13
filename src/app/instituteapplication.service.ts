import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstituteapplicationService {
  
  restURL: string;
  constructor(private myhttp:HttpClient) {
      this.restURL="http://localhost:8989/"
  }
  getapplicationList(): any {
    return this.myhttp.get(`${this.restURL}instituteapplications`);
  }
  
}