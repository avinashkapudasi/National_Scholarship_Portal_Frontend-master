import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';
import { student } from '../student';
import { StudentregistrationService } from '../studentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private myrouter:Router,private vhs:StudentregistrationService,myHttp:HttpClient) { }



  ngOnInit(): void {

  }
  form=new FormGroup({
    'stateofDomicile':new FormControl('',Validators.required),
    'dist':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dob':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.compose([Validators.email, Validators.required])),
    'institutionCode':new FormControl('',Validators.required),
    'aadhar':new FormControl('',Validators.required),
    'ifsc':new FormControl('',Validators.required),
    'accountno':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
  });
  student:student=new student();
  saveStudent()
  {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)
      alert("registration done");
      this.myrouter.navigate(['/studentlogin']);
      this.vhs.addStudent(this.student).subscribe(
        (data)=>{
          console.warn("submited successfully")
          console.log(data);
          alert("Registration done")
        },
        (error)=>
        {
          console.log(error)
        }
      )
  }
}