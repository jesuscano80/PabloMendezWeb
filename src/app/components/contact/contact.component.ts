import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../shared/login.service';
import { ContactFormComponent } from '../../modals/contact-form/contact-form.component';
import { NewsLetterComponent } from '../../modals/news-letter/news-letter.component';
import { EditVideosComponent } from '../../modals/edit-videos/edit-videos.component';
import { EditBiographyComponent } from '../../modals/edit-biography/edit-biography.component';
import { BiographyService } from 'src/app/shared/biography.service';
import { Biography } from '../../models/biography';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public biography: Biography = new Biography("", "", "");

  constructor(
    public loginService: LoginService,
    private matDialog: MatDialog,
    private biographyService: BiographyService
  ) { }

  ngOnInit(): void {
    this.refreshData();
  }
  // This method get the data of the backEnd
  public refreshData(): void {
    this.biographyService.getBiography().subscribe((data: any) => {
      this.biography.title = data.title;
      this.biography.description = data.description;
      this.biography.photo = data.photo;
    }, (err) => {
      // console.log(err);
  });}
  // ----- Open Modals -----
  // ----------//----------//----------//----------//----------
  public openContactForm(): void {
    const dialogRef = this.matDialog.open(ContactFormComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  public openNewsletter(): void {
    const dialogRef = this.matDialog.open(NewsLetterComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  public openEditBiography(): void {
    const dialogRef = this.matDialog.open(EditBiographyComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.biographyCopy = this.biography;
    dialogRef.afterClosed().subscribe(data => {this.biography = data});
  }
  public openEditVideos(): void {
    const dialogRef = this.matDialog.open(EditVideosComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  // ----------//----------//----------//----------//----------
}
