import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nodal } from '../nodal'

@Component({
  selector: 'app-nodalofficer',
  templateUrl: './nodalofficer.component.html',
  styleUrls: ['./nodalofficer.component.css']
})
export class NodalofficerComponent implements OnInit {

  nodalId = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  form=new FormGroup({
    'nodalId':new FormControl('',Validators.compose([Validators.required])),
    'password':new FormControl('',Validators.required),
  })

  nodal:nodal=new nodal();
  checkLogin() {
      this.nodal=this.form.value;
      console.log(this.form.value)
      console.log(this.nodal)
    let nodal={
      "nodalId":this.nodalId,
      "password":this.password
    }

    this.loginService.nodallogin(nodal).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('nodalId', this.nodalId)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['/nodalhome']);
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }

}
