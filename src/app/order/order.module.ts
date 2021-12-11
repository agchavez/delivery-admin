import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { ListComponent } from '../company/list/list.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';



@NgModule({
  declarations: [
    OrderComponent
  
  ],
  imports: [
    OrderRoutingModule,
    SharedModule,
    
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    CommonModule

  ],
  bootstrap: []
})
export class OrderModule { }
