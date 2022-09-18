import { SignInComponent } from './security/sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { PageNotFoundComponent } from './security/page-not-found/page-not-found.component';
import { SignUpComponent } from './security/sign-up/sign-up.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {path:'', component:SignInComponent},
  {path:'register', component:SignUpComponent},

{
  path: 'home',
  component: HomeComponent,
  children: [
    { path: '', component: DashboardComponent }
  ]
},
  // {path:'', component:DashboardComponent},
  {path:'***', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
