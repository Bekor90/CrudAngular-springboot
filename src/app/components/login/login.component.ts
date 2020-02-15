import { Usuario } from './../../clases/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService,private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {

    if(this.authService.isAuthenticated()){
      //mensaje indicando que se encuentra autenticado
      //redirigir a pagina por defecto
      console.log('ya esta logueado');
      this.router.navigate(['/dashboard']);

    }
  }

  login(){
    this.authService.login(this.usuario).subscribe( response => {

      if(this.usuario == null || this.usuario.password == null){
        //mensaje error username o password vacios
        return;
      }

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.usuario; //usuario
      //console.log(response);
      this.router.navigate(['/dashboard']);
    }, err => {
      if(err.status == 400){
        //mensaje de error Usuario o password incorrecto
      }
    });
   
  }




}
