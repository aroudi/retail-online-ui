import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../@fury/shared/material-components.module';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyGridComponent } from './companyGrid.component';
import {CompanyCardComponent} from '../cards/company/companyCard.component';
import { FurySharedModule } from '../../@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    FurySharedModule
  ],
  declarations: [CompanyGridComponent,CompanyComponent, CompanyCardComponent]
})
export class CompanyModule {
}
