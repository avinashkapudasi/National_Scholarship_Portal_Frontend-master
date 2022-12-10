import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionhomeService } from '../institutionhome.service';

@Component({
  selector: 'app-institutionhome',
  templateUrl: './institutionhome.component.html',
  styleUrls: ['./institutionhome.component.css']
})
export class InstitutionhomeComponent implements OnInit {

  constructor(private stu:InstitutionhomeService,private myRouter:Router) { }
  institutionCode:any;
  instituteData:any;

  ngOnInit(): void {
    this.institutionCode=sessionStorage.getItem("email");
    this.stu.ShowDetails(this.institutionCode).subscribe(
      (data)=>{
        console.log(data);
        this.instituteData=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
    /*
     this.username=sessionStorage.getItem("email");
    this.stu.ShowDetails(this.username).subscribe(
      (data)=>{
        console.log(data);
        this.studentData=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
    */ 
  }

}
