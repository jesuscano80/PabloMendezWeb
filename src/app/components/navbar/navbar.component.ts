import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild('scores') scores: any;
  @ViewChild('scoresR') scoresR: any;
  @ViewChild('experiences') experiencies: any;
  @ViewChild('experiencesR') experienciesR: any;
  @ViewChild('contact') contact: any;
  @ViewChild('contactR') contactR: any;

  constructor() {
  }
  ngAfterViewInit () {
    // this.someInput.nativeElement.value = 'Whale!';
  }
  
}