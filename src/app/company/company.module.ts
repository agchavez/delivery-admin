import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DetailCompanyComponent } from './detail-company/detail-company.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    
    
  
    DetailCompanyComponent
  ],
  imports: [
    CompanyRoutingModule,
    SharedModule,
    
    FontAwesomeModule,
  ],
  bootstrap: []
})
export class CompanyModule { }
