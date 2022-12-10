import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstitutionhomeService {

  constructor(private myhttp:HttpClient) { }
  restURL:string="http://localhost:8989/"

  ShowDetails(email:String)
  {
    return this.myhttp.get(`${this.restURL}institutes/`+`${email}`);
  }

  showInstDetails(id:String){
    return this.myhttp.get(this.restURL+'institutes')
  }
}
