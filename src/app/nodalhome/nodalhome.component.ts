import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodalhome',
  templateUrl: './nodalhome.component.html',
  styleUrls: ['./nodalhome.component.css']
})
export class NodalhomeComponent implements OnInit {
  
  nodalId:any;
  constructor() { }

  ngOnInit(): void {
    this.nodalId=sessionStorage.getItem("nodalId");
  }

}
