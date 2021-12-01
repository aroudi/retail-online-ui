import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../service/company/company.service';
import {Company} from '../model/company';
import { fadeInRightAnimation } from '../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../@fury/animations/fade-in-up.animation';

import {Contact} from '../model/contact';

@Component({
  selector: 'fury-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]

})
export class CompanyComponent implements OnInit {
  companyList : Company[] = [];
  myCompany: Company ;
  pageSize = 4;
  constructor(private companyService:CompanyService) {
  }

  ngOnInit(): void {
    this.companyService.getList().subscribe(data => {this.companyList = data;})
  }

}
