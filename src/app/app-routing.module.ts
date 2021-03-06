import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



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
    loadChildren: ()=>import('./clients/client-module').then(m=>m.ClientModule),
  },
  {
    path:'company',
    loadChildren: ()=>import('./company/company.module').then(m=>m.CompanyModule),
  },
  {
    path:'order',
    loadChildren: ()=>import('./order/order.module').then(m=>m.OrderModule),
  },
  
  {
    path:'products',
    loadChildren: ()=>import('./products/product.module').then(m=>m.ProductModule),
  },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
 
  
  {

    path:'',
    loadChildren: ()=> import('./auth/auth.module').then(m=>m.AuthModule),
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
