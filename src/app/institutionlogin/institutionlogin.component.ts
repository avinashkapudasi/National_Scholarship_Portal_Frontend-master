import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Institution } from '../institution';
import { InstitutionloginService } from '../institutionlogin.service';

@Component({
  selector: 'app-institutionlogin',
  templateUrl: './institutionlogin.component.html',
  styleUrls: ['./institutionlogin.component.css']
})
export class InstitutionloginComponent implements OnInit {
  email = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {}
  
  
  form=new FormGroup({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  })
  institute:Institution=new Institution();
  checkLogin()
  {
    this.institute=this.form.value;
      console.log(this.form.value)
      console.log(this.institute)
    let student={
      "email":this.email,
      "password":this.password
    }

    this.loginService.institutelogin(student).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('email', this.email)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['/institutionhome']);
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
      
  }

}