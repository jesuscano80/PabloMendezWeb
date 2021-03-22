import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BlogconnectService {
  url:string
  _id:string
  constructor(public http:HttpClient) {
    this.url="http://localhost:3000/blog";
    this._id="";

   }

   
   getBlogs(){
     return this.http.get(this.url);
   }

   createBlog(post:any){
      return this.http.post(this.url, post );
   }

   editBlog(post:any){
     return this.http.put(this.url+"/"+ this._id, post)
   }

   deleteBlog(){
     return this.http.delete(this.url+"/"+this._id)
   }

   putPhoto(id:string, body:any){
    
    const formdata: FormData = new FormData();
    formdata.append('image', body);
    return this.http.put(this.url+"/"+id+"/image",formdata)

  }
  
}
