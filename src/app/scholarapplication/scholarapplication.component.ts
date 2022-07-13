import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipapplicationService } from '../scholarshipapplication.service';
import { applicationDetails } from '../scholarshipapplicationdetails';


@Component({
  selector: 'app-scholarapplication',
  templateUrl: './scholarapplication.component.html',
  styleUrls: ['./scholarapplication.component.css']
})
export class ScholarapplicationComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router,private bas:ScholarshipapplicationService) { }

  ngOnInit(): void {
  }
  Details:applicationDetails = new applicationDetails();

   savescholarshipDetails(basicDetailsForm:any){
    this.Details=basicDetailsForm.value;
    console.log(basicDetailsForm.value);
    console.log(this.Details);
    this.bas.addStudent(this.Details).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        alert("Registration done")
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
