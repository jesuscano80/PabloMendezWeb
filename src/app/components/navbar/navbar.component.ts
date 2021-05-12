import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {  

  constructor(
    public router:Router
  ) { }
  ngOnInit() {
  }
  // ----- Design functions -----
  // ----------//----------//----------//----------//----------
  public click(num: number) {
    switch (num) {
      case 0:
        this.router.navigate(['index']);
        break;
      case 1:
        this.router.navigate(['scores']);
        break;
      case 2:
        this.router.navigate(['experiencies']);
        break;
      case 3:
        this.router.navigate(['contact']);
        break;
  }}
  // ----------//----------//----------//----------//----------
}