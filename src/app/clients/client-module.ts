import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ClientRoutingModule } from './client-routing.module'
import { ClientComponent } from './list/client.component';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    
    ClientComponent
  ],
  imports: [
    ClientRoutingModule,
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
})
export class ClientModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
 }
