import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DetailCompanyComponent } from './detail-company/detail-company.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from '../company/list/list.component';



@NgModule({
  declarations: [
  
    DetailCompanyComponent,
    ListComponent
  ],
  imports: [
    CompanyRoutingModule,
    SharedModule,
    
    FontAwesomeModule,
    MaterialModule
  ],
  bootstrap: []
})
export class CompanyModule { }
