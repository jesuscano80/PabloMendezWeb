import { Component } from '@angular/core';
import { RoutersService } from './shared/routers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(
    private router:Router,
    private routerService: RoutersService
  ) {
   }
  ngOnInit(): void {
    let flushLinks: any = (localStorage.getItem('links'))?localStorage.getItem('links'):null;
    if (flushLinks !== null) {
      flushLinks = JSON.parse(flushLinks);
      this.routerService.links.index = flushLinks.index;
      this.routerService.links.scores = flushLinks.scores;
      this.routerService.links.experiencies = flushLinks.experiencies;
      this.routerService.links.contact = flushLinks.contact;
      this.routerService.refreshPage();
    }
  }
  onSubmit(){
  }
}