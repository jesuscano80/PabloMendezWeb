import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutersService } from '../../shared/routers.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {  

  constructor(
    private router:Router,
    public routerService: RoutersService
  ) { }
  ngOnInit() {
  }
  //-----Design functions-----
  //----------//----------//----------//----------//----------
  public click(num: number) {
    switch (num) {
      case 0:
        this.routerService.links.index = true;
        this.routerService.links.scores = false;
        this.routerService.links.experiencies = false;
        this.routerService.links.contact = false;
        this.router.navigate(['/index']);
        localStorage.setItem('links', JSON.stringify(this.routerService.links));
        break;
      case 1:
        this.routerService.links.index = false;
        this.routerService.links.scores = true;
        this.routerService.links.experiencies = false;
        this.routerService.links.contact = false;
        this.router.navigate(['/scores']);
        localStorage.setItem('links', JSON.stringify(this.routerService.links));
        break;
      case 2:
        this.routerService.links.index = false;
        this.routerService.links.scores = false;
        this.routerService.links.experiencies = true;
        this.routerService.links.contact = false;
        this.router.navigate(['/experiencies']);
        localStorage.setItem('links', JSON.stringify(this.routerService.links));
        break;
      case 3:
        this.routerService.links.index = false;
        this.routerService.links.scores = false;
        this.routerService.links.experiencies = false;
        this.routerService.links.contact = true;
        this.router.navigate(['/contact']);
        localStorage.setItem('links', JSON.stringify(this.routerService.links));
        break;
  }}
  //----------//----------//----------//----------//----------
}