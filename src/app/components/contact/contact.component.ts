import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public play1: boolean = true;
  public play2: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}