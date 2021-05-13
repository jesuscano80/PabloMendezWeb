import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/models/contact';
import { SendemailService } from 'src/app/shared/sendemail.service';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, AfterViewInit {
  
  @ViewChild('nextBtn') nextBtn: any;
  @ViewChild('contactForm') contactForm: any;

  //This variable controls the data of ngModel
  public contact = new Contact('', '', '', true);

  constructor(
    private dialogRef: MatDialogRef<ContactFormComponent>,
    private matDialog: MatDialog,
    private sendEmail: SendemailService
  ) { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
  }
  //This method close this matDialog and open other for notificate the result of send request
  public next(string: string): void {
    this.dialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = string;
    dialogRef.afterClosed().subscribe();
  }
  onSubmit(form: any): void {
    this.nextBtn.nativeElement.disabled = true;
    this.sendEmail.postEmail(form.value).subscribe(
      (data) => {
        // console.log(data);
        this.next("Se ha enviado tu mensaje correctamente. Pablo se pondrá en contacto contigo por correo electrónico.");
      },
      (err) => {
        // console.log(err);
        this.next("Error, no se ha podido enviar el mensaje. Prueba de nuevo más tarde.");
});}}