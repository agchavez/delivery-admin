import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import { far  } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    DashboardComponent,
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    DashboardComponent,
    DashboardUserComponent
  ]
})
export class SharedModule {

  constructor(library: FaIconLibrary){
    library.addIconPacks(fas, far, fab);
  }
 }
