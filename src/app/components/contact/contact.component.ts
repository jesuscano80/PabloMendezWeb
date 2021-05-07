import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../shared/login.service';
import { ContactFormComponent } from '../../modals/contact-form/contact-form.component';
import { NewsLetterComponent } from '../../modals/news-letter/news-letter.component';
import { EditVideosComponent } from '../../modals/edit-videos/edit-videos.component';
import { EditBiographyComponent } from '../../modals/edit-biography/edit-biography.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public play1: boolean = true;
  public play2: boolean = true;

  constructor(
    public loginService: LoginService,
    private matDialog:MatDialog
  ) { }

  ngOnInit(): void {
  }
  //----- Open Modals -----
  //----------//----------//----------//----------//----------
  public openContactForm() {
    const dialogRef = this.matDialog.open(ContactFormComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  public openNewsletter() {
    const dialogRef = this.matDialog.open(NewsLetterComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  public openEditBiography() {
    const dialogRef = this.matDialog.open(EditBiographyComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  public openEditVideos() {
    const dialogRef = this.matDialog.open(EditVideosComponent,{panelClass: ['animate__animated','animate__backInDown']});
    dialogRef.afterClosed().subscribe();
  }
  //----------//----------//----------//----------//----------
}