import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { ListComponent} from './../app/admin/list/list.component';
import { ListCandidateComponent} from './../app/biker/list-candidate/list-candidate.component';
import { ListComponentB} from './../app/biker/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
