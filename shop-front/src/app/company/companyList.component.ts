import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../@fury/shared/list/list-column.model';
import {CompanyService} from '../service/company/company.service';
import { Company } from '../model/company';
import { fadeInRightAnimation } from '../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../@fury/animations/fade-in-up.animation';

@Component({
  selector: 'fury-companyList',
  templateUrl: './companyList.component.html',
  styleUrls: ['./companyList.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class CompanyListComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Company[]> = new ReplaySubject<Company[]>(1);
  data$: Observable<Company[]> = this.subject$.asObservable();
  companies: Company[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Id', property: 'id', visible: false, isModelProperty: true },
    { name: 'Name', property: 'compName', visible: true, isModelProperty: true },
    { name: 'Info.', property: 'compDesc', visible: true, isModelProperty: true },
    { name: 'Code', property: 'code', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Company> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private companyService:CompanyService) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return this.companyService.getList();
  }

  ngOnInit() {
    this.getData().subscribe(companies => {
      this.subject$.next(companies);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((companies) => {
      this.companies = companies;
      this.dataSource.data = companies;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
