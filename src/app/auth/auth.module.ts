import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [
  
    MainComponent,
       NavBarComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
  constructor(){
    
  }
 }
