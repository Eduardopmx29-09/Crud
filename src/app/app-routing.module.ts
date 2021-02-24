import { FormUserComponent } from './componets/form-user/form-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDateComponent } from './componets/form-date/form-date.component';
import { ListComponent } from './componets/list/list.component';


const routes: Routes = [

  {path:'',component:FormUserComponent},
  {path:'cita',component:FormDateComponent},
  {path:'lista',component:ListComponent},
  {path:'editar-cita/:id',component:FormDateComponent},
  {path:'**',redirectTo:'cita',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule
  ]
})
export class AppRoutingModule { }
