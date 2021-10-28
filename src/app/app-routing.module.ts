import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsModule } from './clients/clients-module';



const routes: Routes = [
  {

    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
  },

  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule),
  }, 
  {
    path:'biker',
    loadChildren: ()=>import('./biker/biker.module').then(m=>m.BikerModule),
  },
  {
    path:'clients',
    loadChildren: ()=>import('./clients/clients-module').then(m=>m.ClientsModule),
  },
  {
    path:'company',
    loadChildren: ()=>import('./company/company.module').then(m=>m.CompanyModule),
  },
  {
    path:'products',
    loadChildren: ()=>import('./products/product.module').then(m=>m.ProductModule),
  },
 
  
  {
    path:'**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
