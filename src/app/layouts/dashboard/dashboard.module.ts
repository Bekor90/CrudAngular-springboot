import { ClientesComponent } from './../../components/dashboard/clientes/clientes.component';

import { EmpresasComponent } from './../../components/dashboard/empresas/empresas.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    EmpresasComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
