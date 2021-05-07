import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ContactFormComponent>,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  public next() {
    this.dialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.componentInstance.message="Se ha enviado tu mensaje correctamente. Pablo se pondrá en contacto contigo por correo electrónico.";
    dialogRef.afterClosed().subscribe();
  }
}
