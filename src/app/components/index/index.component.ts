import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/shared/videos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  public play = true;
  public videoI = 'assets/videoIdx.mp4';
  constructor(private videoService: VideosService) {
    this.videoService.getVideos().subscribe(
      (data: any) => {
        this.videoI = data.vIndex;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {}
  video() {
    this.play = !this.play;
  }
}
