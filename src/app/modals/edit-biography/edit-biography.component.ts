import { Component, OnInit } from '@angular/core';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Biography } from 'src/app/models/biography';
import { BiographyService } from 'src/app/shared/biography.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-biography',
  templateUrl: './edit-biography.component.html',
  styleUrls: ['./edit-biography.component.scss']
})
export class EditBiographyComponent implements OnInit {

  public bio: any;
  public error: string= '';

  constructor(
    private dialogRef: MatDialogRef<EditBiographyComponent>,
    private matDialog: MatDialog,
    private biographyService: BiographyService
  ) {
    this.bio = {
      title: 'Compositor musical',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perspiciatis illo,
      suscipit dolore pariatur provident at nulla doloremque aspernatur commodi accusantium
      et neque unde modi iste cupiditate ea, labore totam. Sint aliquid animi numquam sunt
      necessitatibus ab similique sit maxime accusamus? Reprehenderit numquam amet dolor
      magni illo am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
      numquam am sunt necessitatibus ab similique sit maxime accusamus? Reprehenderit
      numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
      numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
      numquam rehenderit numquam am sunt necessitatibus ab similique sit maxime accusamus?
      numquam rehenderit numquam am sunt necessitatibus`,
      photo: 'assets/Pablico.jpeg'
    };

  }

  ngOnInit(): void {
    this.biographyService.getBiography().subscribe(
      (data: any) => {
        this.bio.title = data.title;
        this.bio.description = data.description;
        this.bio.photo = data.photo;
      },
      (err) => {console.log(err); }
    );
  }
  public saveEdit() {
    this.dialogRef.close(); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.message = 'Se han actualizado los datos de la página';
    dialogRef.afterClosed().subscribe(
      () => {location.reload();
              },
      (err) => {console.log(err); }
    );
  }

  onSubmit(form: any){
    const {title, description} = form;
    const updatedBio = new Biography(title, description, this.bio.photo);

    this.biographyService.postBiography(updatedBio).subscribe(
      (data) => {
        console.log(data);
        this.saveEdit();

      },
      (err) => {
        const dialogRef = this.matDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
        dialogRef.componentInstance.message = 'Error, no se han podido actualizar los datos';
        dialogRef.afterClosed().subscribe();
      }
    );
  }

  uploadPhoto(image: any){
    this.error = '';
    const imageToUpload = image.target.files.item(0);
    this.biographyService.putBiography(imageToUpload).subscribe(
      (data: any) => {
        this.bio.photo = `http://localhost:3000/uploads/${data.filename}`;
      },
      (err) => {
        this.error = err.error.message;

      }
    );
  }
}
