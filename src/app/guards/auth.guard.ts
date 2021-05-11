import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../shared/login.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private loginService:LoginService,
    private router:Router
    ){}

  
  canActivate():boolean{
  if (this.loginService.loggedIn()){
    return true
  }

  this.router.navigate(["index"]);
  return false
  }
  
  
}
