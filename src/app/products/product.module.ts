import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './product-routing.module';
import {SharedModule} from './../shared/shared.module';


@NgModule({
  declarations: [

  ],
  imports: [
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductModule {
  constructor(){
    
  }
 }
