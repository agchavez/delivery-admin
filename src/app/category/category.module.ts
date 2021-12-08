import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListComponent } from '../category/list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,    
    SharedModule,

    FontAwesomeModule,
    FormsModule
  ]
})
export class CategoryModule { }
