import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteapplicationService } from '../instituteapplication.service';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-instituteapplications',
  templateUrl: './instituteapplications.component.html',
  styleUrls: ['./instituteapplications.component.css']
})
export class InstituteapplicationsComponent implements OnInit {

  instituteapplication:any
  
  
  constructor(private inst:InstituteapplicationService,private myRouter:Router) { }

   approve(institute:any){
    const newData={status:true}
    this.inst.updateStatus(institute.institutionCode,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        this.reloadData();
  }

  remove(application:any){
    
    this.inst.deleteInstitute(application.id).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error));
      this.reloadData();
  }
   
   ngOnInit(): void {
    this.instituteapplication=this.inst.getapplicationList();
    this.reloadData();
  }
  
   reloadData() {
      this.instituteapplication=this.inst.getapplicationList();
    }
  }

