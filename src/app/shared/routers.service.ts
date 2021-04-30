import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutersService {
  
  public links: any = {
    "index": true,
    "scores": false,
    "experiencies": false,
    "contact": false
  }
  
  constructor(
    private router:Router
  ) { }

  public refreshPage() {
    if (this.links.index) {
      this.router.navigate(['/index']);
    } else if (this.links.scores){
      this.router.navigate(['/scores']);
    } else if (this.links.experiencies){
      this.router.navigate(['/experiencies']);
    } else if (this.links.contact){
      this.router.navigate(['/contact']);
}}}
