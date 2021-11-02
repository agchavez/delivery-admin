import { NgModule } from '@angular/core';


import { AdminRoutingModule } from './admin-routing.module'
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    NewComponent,
    EditComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule
  ],
})
export class AdminModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
 }
