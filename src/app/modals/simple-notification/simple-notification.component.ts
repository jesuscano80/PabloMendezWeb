import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-notification',
  templateUrl: './simple-notification.component.html',
  styleUrls: ['./simple-notification.component.scss']
})
export class SimpleNotificationComponent implements OnInit {

  public message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
