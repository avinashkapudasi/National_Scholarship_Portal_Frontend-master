import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from '../student';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private stu:StudenthomeService,private myRouter:Router) { }
username:any;
studentData:any;
  ngOnInit(): void 
  {
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
  }

}
 

