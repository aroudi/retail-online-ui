import { Injectable, Inject } from '@angular/core';
import { ResourceService } from "../resource-service.service";
import {Company} from '../../model/company';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends ResourceService<Company>{

  constructor(protected httpClient: HttpClient ) {
    super(httpClient);
  }

  getResourceUrl(): string {
    return 'companyList';
  }
}

