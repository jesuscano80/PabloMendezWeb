import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Editar para verificar el logueo de Pablo en la app y acceder como admin
  // public isLogin: boolean = false;
  public isLogin: boolean = true;

  constructor() { }
  //Editar para verificar el logueo de Pablo en la app y acceder como admin
  public login() {
    this.isLogin = !this.isLogin;
  }
}
