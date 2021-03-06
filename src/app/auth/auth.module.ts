import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main/main.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module'
import { LoginComponent } from './pages/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Importar formulario de angular



@NgModule({
  declarations: [

    MainComponent,
    NavBarComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    FontAwesomeModule,
    ReactiveFormsModule

  ]
})
export class AuthModule {
  constructor(){

  }
 }
