import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { VideosService } from 'src/app/shared/videos.service';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-edit-videos',
  templateUrl: './edit-videos.component.html',
  styleUrls: ['./edit-videos.component.scss']
})
export class EditVideosComponent implements OnInit {

  public video: any;

  constructor(
    private MatDialogRef: MatDialogRef<EditVideosComponent>,
    private MatDialog: MatDialog,
    private videoService: VideosService
  ) {

    this.video = {
      vIndex: 'assets/videoIdx.mp4',
      video1: 'assets/videoIdx.mp4',
      video2: 'assets/videoIdx.mp4'
    };
  }

  ngOnInit(): void {
  }
  public saveEdit() {
    this.MatDialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.MatDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.message = 'Se han actualizado los datos de la página';
    dialogRef.afterClosed().subscribe();
  }

  putVideo(video: any, param: string){
    const theVideo = video.target.files.item(0);
    this.videoService.putVideos(theVideo, param).subscribe(
      (data: any) => {

        if (param == 'index'){
              this.video.vIndex = `http://localhost:3000/uploads/${data.filename}`;
        }
        if (param == 'video1'){
            this.video.video1 = `http://localhost:3000/uploads/${data.filename}`;
        }
        if (param == 'video2'){
            this.video.video2 = `http://localhost:3000/uploads/${data.filename}`;
        }
        console.log(this.video);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
