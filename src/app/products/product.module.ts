import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './product-routing.module';
import {SharedModule} from './../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewComponent } from '../products/new/new.component';


@NgModule({
  declarations: [
    NewComponent,
    

  ],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    MaterialModule,
    FormsModule,
    CommonModule
  ]
})
export class ProductModule {
  constructor(){
    
  }
 }
