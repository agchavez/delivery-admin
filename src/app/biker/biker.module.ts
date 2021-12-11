import { NgModule } from '@angular/core';

import { BikerRoutingModule } from './biker-routing.module'

import { ListComponentB } from './list/list.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { CommonModule } from '@angular/common';

import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListComponentB,
    ListCandidateComponent
    
  ],
  imports: [
    BikerRoutingModule,
    CommonModule,
    FontAwesomeModule,
    SharedModule
  ],
})
export class BikerModule {
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
 }
