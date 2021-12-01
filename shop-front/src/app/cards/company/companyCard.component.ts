import {Component, OnInit, Input, SimpleChanges} from '@angular/core';
import {Company} from '../../model/company';

@Component({
  selector: 'company-card',
  templateUrl: './companyCard.component.html',
  styleUrls: ['./companyCard.component.scss']
})
export class CompanyCardComponent implements OnInit {
  @Input() company: Company;
  constructor() {
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("company =" + this.company);
    console.log(changes); // here you will get the data from parent once the input param is change
  }

}
