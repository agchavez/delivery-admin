import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {

    path:'adminList',
    loadChildren: ()=> import('./pages/admins/admin-list/admin-list.component').then(m=>m.AdminListComponent),
  },
  {
    path:'adminNew',
    loadChildren: ()=> import('./pages/admins/admin-new/admin-new.component').then(m=>m.AdminNewComponent),
  },
  {
    path:'adminEdit',
    loadChildren: ()=> import('./pages/admins/admin-edit/admin-edit.component').then(m=>m.AdminEditComponent),
  },
  {
    path:'bikerList',
    loadChildren: ()=> import('./pages/biker/biker-list/biker-list.component').then(m=>m.BikerListComponent),
  },
  {
    path:'bikerListCandidate',
    loadChildren: ()=> import('./pages/biker/biker-list-candidate/biker-list-candidate.component').then(m=>m.BikerListCandidateComponent),
  },
  {
    path:'bikerCard',
    loadChildren: ()=> import('./pages/biker/application-card/application-card.component').then(m=>m.ApplicationCardComponent),
  },
  {
    path:'clients',
    loadChildren: ()=> import('./pages/clients/clients.component').then(m=>m.ClientsComponent),
  },
  {

    path:'companyList',
    loadChildren: ()=> import('./pages/company/company-list/company-list.component').then(m=>m.CompanyListComponent),
  },
  {
    path:'companyNew',
    loadChildren: ()=> import('./pages/company/company-new/company-new.component').then(m=>m.CompanyNewComponent),
  },
  {
    path:'companyEdit',
    loadChildren: ()=> import('./pages/company/company-edit/company-edit.component').then(m=>m.CompanyEditComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
