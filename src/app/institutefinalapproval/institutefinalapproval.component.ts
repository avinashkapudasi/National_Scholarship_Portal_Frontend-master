import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteapplicationService } from '../instituteapplication.service';

@Component({
  selector: 'app-institutefinalapproval',
  templateUrl: './institutefinalapproval.component.html',
  styleUrls: ['./institutefinalapproval.component.css']
})
export class InstitutefinalapprovalComponent implements OnInit {
  instituteapplication:any

  constructor(private inst:InstituteapplicationService,private myRouter:Router) { }

  finalApprove(institute:any){
    const newData={finalStatus:true}
    this.inst.updateFinalStatus(institute.institutionCode,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        this.reloadData();
        
  }

  remove(application:any){
    
    this.inst.deleteInstitute(application.institutionCode).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => console.log(error));
      this.reloadData();
  }

  ngOnInit(): void {
    this.instituteapplication=this.inst.getFinalApplicationList();
    this.reloadData()
  }

  reloadData() {
    this.instituteapplication=this.inst.getFinalApplicationList();
  }

}
