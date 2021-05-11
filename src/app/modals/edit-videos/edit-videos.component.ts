import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-edit-videos',
  templateUrl: './edit-videos.component.html',
  styleUrls: ['./edit-videos.component.scss']
})
export class EditVideosComponent implements OnInit {

  // Estas variables se deben agrupar en un json ya son propiedades de un mismo objeto
  public vIndex : string;
  public video1 : string;
  public video2 : string;

  constructor(
    private MatDialogRef: MatDialogRef<EditVideosComponent>,
    private MatDialog: MatDialog
  ) {
    this.vIndex = "assets/videoIdx.mp4";
    this.video1 = "assets/videoIdx.mp4";
    this.video2 = "assets/videoIdx.mp4";
  }

  ngOnInit(): void {
  }
  public saveEdit() {
    this.MatDialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.MatDialog.open(SimpleNotificationComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.componentInstance.message="Se han actualizado los datos de la página";
    dialogRef.afterClosed().subscribe();
  }
}