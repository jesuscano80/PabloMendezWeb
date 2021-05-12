import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Global } from '../models/global';

@Injectable({
  providedIn: 'root'
})
export class SendemailService {

public global: Global = new Global();
public url = this.global.url + 'sendemail';

constructor(
    public http: HttpClient
    ) { }

  postEmail(form: Contact){
    console.log(this.url);
    console.log(form);
    return this.http.post(this.url, form);

  }
}
