import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PageNotFoundComponent } from './security/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'***', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
