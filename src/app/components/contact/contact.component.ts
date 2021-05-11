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

  // Estas variables se deben agrupar en un json ya son propiedades de un mismo objeto
  public title: string;
  public description: string;
  public photo: string;

  constructor(
    public loginService: LoginService,
    private matDialog:MatDialog
  ) {
    // Cambiar para meter la información desde el back
    this.title = "Compositor musical";
    this.description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis illo,
    suscipit dolore pariatur provident at nulla doloremque aspernatur commodi accusantium
    et neque unde modi iste cupiditate ea, labore totam. Sint aliquid animi numquam sunt
    necessitatibus ab similique sit maxime accusamus? Reprehenderit numquam amet dolor
    magni illo am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
    numquam am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
    numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
    numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
    numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
    numquam rehenderit numquam am sunt necessitatibus`;
    this.photo = "assets/Pablico.jpeg";
  }

  ngOnInit(): void {
    this.openEditVideos()
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