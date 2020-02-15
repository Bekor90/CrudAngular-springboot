import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'servicios', component: ServiciosComponent
      },
      {
        path: 'clientes', component: ServiciosComponent
      },
      {
        path: 'auth',
        children: [          
          { path: '', loadChildren: './components/login/login.module#LoginModule' }  
        ]
      }      
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [          
      { path: '', loadChildren: './layouts/dashboard/dashboard.module#DashboardModule' }  
    ]
  },
  { path: '', redirectTo: '/home/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
