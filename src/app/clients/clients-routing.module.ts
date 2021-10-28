import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../main/main.component';
import { ClientsComponent } from './list/clients.component';




const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'list', component:ClientsComponent},
      {path:'**', redirectTo: 'login'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
