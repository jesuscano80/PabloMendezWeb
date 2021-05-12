import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public router: Router,
    public loginService: LoginService
    ) {}
  ngOnInit(): void {
    if (this.loginService.loggedIn()) {
      this.loginService.isLogin = true;
    }
  }
  onSubmit() {}
}
