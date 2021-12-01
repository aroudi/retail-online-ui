import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyGridComponent} from './companyGrid.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule {
}
