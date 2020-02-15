import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../clases/clientes';
import { ClienteService } from './../../../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  /*clientes: Cliente[] = [
    { id:1, nombre: 'John Anderson', apellido: 'Garcia Vanegas', email:'jhon.anderson.vanegas@gmail.com', createAt: '2020-02-05'},
    { id:2, nombre: 'Camilo', apellido: 'Rengifo', email:'camilor@gmail.com', createAt: '2020-02-05'},
    { id:3, nombre: 'Miguel', apellido: 'Guatibonza', email:'jmiguelg@gmail.com', createAt: '2020-02-05'}
  ];*/
  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe( clientes => this.clientes = clientes);
    //por medio de promesas
    //this.clienteService.getClientes().then( clientes => this.clientes = clientes); 
  }

}
