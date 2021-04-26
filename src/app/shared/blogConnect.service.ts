import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Global } from '../models/global';

@Injectable({
	providedIn: 'root'
})
export class BlogConnectService {
	private global:Global = new Global();
	private url: string = `${this.global.url}blog`;
	private _id: string = "";
	constructor(
		private http: HttpClient
	) { }
	getBlogs() {
		return this.http.get(this.url);
	}
	createBlog(post: any) { // Definir un modelo de blog
		return this.http.post(this.url, post);
	}
	editBlog(post: any) {  // Definir un modelo de blog
		return this.http.put(this.url + "/" + this._id, post);
	}
	deleteBlog() {
		return this.http.delete(this.url + "/" + this._id);
}}