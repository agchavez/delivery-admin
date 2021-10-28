import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './../main/main.component';




const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {path:'edit', component:EditComponent},
      {path:'list', component:ListComponent},
      {path:'new',component: NewComponent},
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
