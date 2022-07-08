import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Institution } from '../institution';
import { InstitutionregistrationService } from '../institutionregistration.service';
import { Student } from '../student';
import { Studentregis } from '../studentregis';
import { StudentregistrationService } from '../studentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  constructor(private vhs:StudentregistrationService,myHttp:HttpClient) { }



  ngOnInit(): void {

  }
  form=new FormGroup({
    'stateofDomicile':new FormControl('',Validators.required),
    'dist':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dob':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'institutionCode':new FormControl('',Validators.required),
    'aadharNumber':new FormControl('',Validators.required),
    'ifsc':new FormControl('',Validators.required),
    'accountno':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'setPassword':new FormControl('',Validators.required),
    'confirmPassword':new FormControl('',Validators.required)
  });
  student:Studentregis=new Studentregis();
  saveStudent()
  {
      this.student=this.form.value;
      console.log(this.form.value)
      console.log(this.student)

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