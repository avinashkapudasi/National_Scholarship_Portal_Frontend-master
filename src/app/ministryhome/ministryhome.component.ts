import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryhomeService } from '../ministryhome.service';

@Component({
  selector: 'app-ministryhome',
  templateUrl: './ministryhome.component.html',
  styleUrls: ['./ministryhome.component.css']
})
export class MinistryhomeComponent implements OnInit {

  constructor(private min:MinistryhomeService,private myRouter:Router) { }

  ministryId:any;
  ministryData:any;

  ngOnInit(): void {
    this.ministryId=sessionStorage.getItem("ministryId");
    this.min.ShowDetails(this.ministryId).subscribe(
      (data)=>{
        console.log(data);
        this.ministryData=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
