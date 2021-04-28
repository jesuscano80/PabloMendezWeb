import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  public index: boolean = false;
  public scores: boolean = false;
  public experiencies: boolean = false;
  public contact: boolean = false;

  constructor(
    private router:Router,
  ) {
  }
  ngAfterViewInit() {
  }
  //-----Design functions-----
  //----------//----------//----------//----------//----------
  public click(num: number) {
    switch (num) {
      case 0:
        this.index = true;
        this.scores = false;
        this.experiencies = false;
        this.contact = false;
        this.router.navigate(['/index']);
        break;
      case 1:
        this.index = false;
        this.scores = true;
        this.experiencies = false;
        this.contact = false;
        this.router.navigate(['/scores']);
      break;
      case 2:
        this.index = false;
        this.scores = false;
        this.experiencies = true;
        this.contact = false;
        this.router.navigate(['/experiencies']);
      break;
      case 3:
        this.index = false;
        this.scores = false;
        this.experiencies = false;
        this.contact = true;
        this.router.navigate(['/contact']);
      break;
  }}
  //----------//----------//----------//----------//----------
}