import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SimpleNotificationComponent } from 'src/app/modals/simple-notification/simple-notification.component';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login = new Login('', '');

  constructor(
    private loginService: LoginService,
    private router: Router,
    private matDialog: MatDialog
    ) {}

  ngOnInit(): void {}
  onSubmit(form: any) {
    this.loginService.postLogin(form.value).subscribe((data: any) => {
        console.log(data);

        this.loginService.login();
        this.alert('Bienvenido Pablo!');
        localStorage.setItem('token', data.token);
        this.router.navigate(['contact']);


    }, (err) => {
      this.login.username = '';
      this.login.password = '';
      this.alert('Usuario o contraseña incorrectos');

    });
  }
  public alert(message: string) {
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.message = message;
    dialogRef.afterClosed().subscribe();
  }


}
