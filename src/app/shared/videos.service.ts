import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
public global: Global = new Global();
public url = this.global.url + 'videos';
  constructor(
    private http: HttpClient
  ) { }

  putVideos(video: any, param: string){
    const formdata = new FormData;
    const newUrl = this.url + '/' + param;
    formdata.append('video', video);
    return this.http.put(newUrl, formdata);
  }

  getVideos(){
    return this.http.get(this.url);
  }
}
