import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ministry } from '../ministry';
import { AdminloginService } from '../adminlogin.service';
import { student } from '../student';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private add:AdminloginService,private myRouter:Router) { }

  ngOnInit(): void {
  }
  user:any;
  Ministry:Ministry=new Ministry();
  loginValues:any;
  loginpass:any;
  loginValid:any;
  form=new FormGroup({
    'admin':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  });
  login()
  {
      console.log(this.form.value);
      this.add.login(this.form.value).subscribe(data=>{
        let res=data;
          if(res.status==200)
          {
            sessionStorage.setItem("adminlogedIn",this.form.value.admin);
            this.myRouter.navigate(['/adminhome']);
          }
      })
  }
}

