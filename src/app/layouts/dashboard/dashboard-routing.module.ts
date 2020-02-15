import { ClientesComponent } from './../../components/dashboard/clientes/clientes.component';
import { EmpresasComponent } from './../../components/dashboard/empresas/empresas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'empresas', component: EmpresasComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
