import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biography } from '../models/biography';
import { Global } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {
  public global: Global = new Global();
  public url = this.global.url + 'biography';
  constructor(
    private http: HttpClient
  ) { }

  postBiography(form: Biography){
    return this.http.post(this.url, form);
  }

  getBiography(){
    return this.http.get(this.url);
  }

  putBiography(image: any){
    const formdata = new FormData();
    formdata.append('image', image);
    return this.http.put(this.url, formdata);
  }

}
