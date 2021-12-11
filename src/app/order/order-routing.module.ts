import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../main/main.component';
import { SharedModule } from '../shared/shared.module'
import { OrderComponent } from './order.component';



const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'list', component:OrderComponent},

      
      //{path:'**', redirectTo: 'login'}
  
 ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
