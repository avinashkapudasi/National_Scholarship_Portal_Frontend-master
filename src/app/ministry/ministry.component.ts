import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ministry } from '../ministry';
@Component({
  selector: 'app-ministry',
  templateUrl: './ministry.component.html',
  styleUrls: ['./ministry.component.css']
})
export class MinistryComponent implements OnInit {
  ministryId = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }
  form=new FormGroup({
    'ministryId':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required),
  })
  ministry:ministry=new ministry();
  checkLogin() {
      this.ministry=this.form.value;
      console.log(this.form.value)
      console.log(this.ministry)
    let ministry={
      "ministryId":this.ministryId,
      "password":this.password
    }
    this.loginService.ministrylogin(ministry).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('ministryId', this.ministryId)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['/ministryhome']);
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }
}
