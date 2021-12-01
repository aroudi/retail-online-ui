import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../@fury/shared/list/list.module';
import { MaterialModule } from '../../@fury/shared/material-components.module';
import { CompanyListRoutingModule } from './companyList-routing.module';
import { CompanyListComponent } from './companyList.component';
import { FurySharedModule } from '../../@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [CompanyListComponent],
  exports: [CompanyListComponent]
})
export class CompanyListModule {
}
