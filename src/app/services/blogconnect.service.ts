import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class BlogconnectService {
  url:string
  constructor(public http:HttpClient) {
    this.url="http://localhost:3000/blog";
   }

   getBlogs(){
     return this.http.get(this.url);
   }
}
