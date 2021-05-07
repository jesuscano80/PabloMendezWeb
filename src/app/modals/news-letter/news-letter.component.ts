import { Component, OnInit } from '@angular/core';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<NewsLetterComponent>,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  public next() {
    this.dialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.componentInstance.message="Se ha realizado la subscripción correctamente, ¡muchas gracias!";
    dialogRef.afterClosed().subscribe();
  }
}