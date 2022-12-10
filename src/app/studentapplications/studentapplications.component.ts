import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-studentapplications',
  templateUrl: './studentapplications.component.html',
  styleUrls: ['./studentapplications.component.css']
})
export class StudentapplicationsComponent implements OnInit {

  Studentapplication:any
  ShowDetails:any;
  constructor(private stu:StudentapplicationsService,private myRouter:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  
  approve(application:any){
    const newData={status:true}
    this.stu.updateStatus(application,newData)
      .subscribe((data: any) => console.log(data),
        (error: any) => console.log(error));
        
  }

  remove(application:any){
    
    this.stu.deleteStudent(application.aadhar).subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
      this.reloadData();
  }

  reloadData() {
    this.Studentapplication=this.stu.getapplicationList();
  }

}
