import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company';
import { fadeInRightAnimation } from '../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../@fury/animations/fade-in-up.animation';

import {Contact} from '../model/contact';
import {PageEvent} from '@angular/material/paginator';
import {Observable} from 'rxjs';

@Component({
  selector: 'fury-company',
  templateUrl: './companyGrid.component.html',
  styleUrls: ['./companyGrid.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]

})
export class CompanyGridComponent implements OnInit {
  constructor(private companyService:CompanyService) {
  }
  pageEvent: void;
  companyList: Company[]= [];
  pagedList: Company[]= [];
  breakpoint: number = 3;  //to adjust to screen
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 3;  //displaying three cards each row
  pageSizeOptions: number[] = [3, 6, 9, 12];

  ngOnInit() {
    this.companyService.getList().subscribe(data => {this.companyList = data;
      this.pagedList = this.companyList.slice(0, 3);
      console.log("pagedList size =" + this.pagedList.length);
      this.length = this.companyList.length;
    })
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  };


OnPageChange(event: PageEvent){
  console.log("OnPageChange called");
  let startIndex = event.pageIndex * event.pageSize;
  let endIndex = startIndex + event.pageSize;
  console.log("startIndex = " + startIndex);
  console.log("endIndex = " + endIndex);
  console.log("this.length = " + this.length);
  if(endIndex > this.length){
    endIndex = this.length;
  }
  this.pagedList = this.companyList.slice(startIndex, endIndex);
};

onResize(event) { //to adjust to screen size
  console.log("onResize called");
  this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
};
}
