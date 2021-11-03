import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './../main/main.component';
import { ListComponentB } from './list/list.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { SolicitedComponent } from './solicited/solicited.component';




const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {path:'list', component:ListComponentB},
      {path:'list-candidate', component:ListCandidateComponent},
      {path:'solicited', component:SolicitedComponent},
      {path:'**', redirectTo: 'login'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikerRoutingModule { }
