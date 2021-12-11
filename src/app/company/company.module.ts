import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from './../shared/shared.module';
import { DetailCompanyComponent } from './detail-company/detail-company.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from '../company/list/list.component';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  
    DetailCompanyComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CompanyRoutingModule,
    SharedModule,
    
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    CommonModule

  ],
  bootstrap: []
})
export class CompanyModule { }
