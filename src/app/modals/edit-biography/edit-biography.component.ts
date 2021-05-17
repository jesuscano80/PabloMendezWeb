import { Component, OnInit } from '@angular/core';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Biography } from 'src/app/models/biography';
import { BiographyService } from 'src/app/shared/biography.service';
@Component({
  selector: 'app-edit-biography',
  templateUrl: './edit-biography.component.html',
  styleUrls: ['./edit-biography.component.scss']
})
export class EditBiographyComponent implements OnInit {

  public biography: Biography = new Biography("", "", "");
  public biographyCopy: Biography = new Biography("", "", "");
  public error: string= '';

  constructor(
    private dialogRef: MatDialogRef<EditBiographyComponent>,
    private matDialog: MatDialog,
    private biographyService: BiographyService
  ) { }

  ngOnInit(): void {
    this.biography.title = this.biographyCopy.title;
    this.biography.description = this.biographyCopy.description;
    this.biography.photo = this.biographyCopy.photo;
  }

  public close(): void {
    this.dialogRef.close(this.biographyCopy);
  }
  public saveEdit(string: string): void {
    this.dialogRef.close(this.biography); // This line close the actual modal for not overlap with SimpleNotification modal
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    dialogRef.componentInstance.message = string;
    dialogRef.afterClosed().subscribe();
  }

  onSubmit(form: any): void {
    const {title, description} = form;
    const updatedBio = new Biography(title, description, this.biography.photo);

    this.biographyService.postBiography(updatedBio).subscribe(
      (data) => {
        this.saveEdit('Se han actualizado los datos de la página');
      },
      (err) => {
        this.saveEdit('Error, no se han podido actualizar los datos');
  });}

  uploadPhoto(image: any): void {
    this.error = '';
    const imageToUpload = image.target.files.item(0);
    this.biographyService.putBiography(imageToUpload).subscribe((data: any) => {
        this.biography.photo = `http://localhost:3000/uploads/${data.filename}`;
      }, (err) => {
        this.error = err.error.message;
});}}
