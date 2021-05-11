import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../models/global';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private global:Global = new Global();
  private url= this.global.url + "login";

  //Editar para verificar el logueo de Pablo en la app y acceder como admin
  public isLogin: boolean = false;
  // public isLogin: boolean = true;

  constructor(
    private http:HttpClient,
    private router:Router
    ) { }


  //Editar para verificar el logueo de Pablo en la app y acceder como admin
  public login() {
    this.isLogin = !this.isLogin;
  }

  public postLogin(form:Login){
    console.log(form);
    return this.http.request("POST",this.url,{
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' }),
      body: form
    })}

   public loggedIn():Boolean{
     if (localStorage.getItem("token")){
       return true
     }
     else{
       return false
     }
   } 

   public getToken(){
     return localStorage.getItem("token")
   }

   public logOut(){
     localStorage.removeItem("token");
     this.login();
     this.router.navigate(["index"])

   }
  }
  
