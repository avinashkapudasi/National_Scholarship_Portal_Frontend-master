import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryhomeService } from '../ministryhome.service';

@Component({
  selector: 'app-ministryhome',
  templateUrl: './ministryhome.component.html',
  styleUrls: ['./ministryhome.component.css']
})
export class MinistryhomeComponent implements OnInit {
  restURL: string;

  constructor(private myhttp:HttpClient,private min:MinistryhomeService,private myRouter:Router) { 
    this.restURL="http://localhost:8989/"
  }

  ministryId:any;

  ngOnInit(): void {
    this.ministryId=sessionStorage.getItem("ministryId");
  }

}
function getapplicationList(this: any) {
  return this.myhttp.get(`${this.restURL}Instituteapplication`);
    }
