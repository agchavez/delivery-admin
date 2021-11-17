import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../main/main.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { SharedModule } from '../shared/shared.module'
import { DetailCompanyComponent } from './detail-company/detail-company.component';



const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'edit', component:EditComponent},
      {path:'list', component:ListComponent},
      {path:'new', component:NewComponent},
      {path:'detail', component:DetailCompanyComponent},

      
      {path:'**', redirectTo: 'login'}
  ,
 ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
