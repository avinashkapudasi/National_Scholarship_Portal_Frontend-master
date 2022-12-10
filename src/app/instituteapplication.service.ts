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
    return this.myhttp.get(`${this.restURL}institutes`);
  }

  updateStatus(institutionCode: any, newData: any) {
    return this.myhttp.put(`${this.restURL}institutions/${institutionCode}`,newData);
  }

  updateFinalStatus(institutionCode: any, newData: any) {
    return this.myhttp.put(`${this.restURL}ministry/institutefinalapproval/${institutionCode}`,newData);
  }

  deleteInstitute(id: any) {
    return this.myhttp.delete(`${this.restURL}delete-institute/${id}`);
  }


  getFinalApplicationList(): any {
    return this.myhttp.get(`${this.restURL}ministry/instituteapplicationministry`);
  }
  
  
}
