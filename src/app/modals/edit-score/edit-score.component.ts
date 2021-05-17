import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-edit-score',
  templateUrl: './edit-score.component.html',
  styleUrls: ['./edit-score.component.scss']
})
export class EditScoreComponent implements OnInit {

  // This variable controls the message for the client when finish to edit or create the score
  public isNew: boolean = true;
  
  // This variable controls all possible values for datalist
  public categoriesDatalist: string[] = []

  public card: Card = new Card();
  public cardCopy: Card = new Card();

  constructor(
    private dialogRef: MatDialogRef<EditScoreComponent>,
    private matDialog: MatDialog
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    // This code copy the binding data between this modal and scoresComponent for save a original copy of data without modifications
    // cardCopy is the original data and card is the variable with you can play and make changes
    // IMPORTANT: card properties need to be assigned one by one for not generate bugs in code
    this.card.id = this.cardCopy.id;
    this.card.title = this.cardCopy.title;
    this.card.description = this.cardCopy.description;
    this.card.categories = this.cardCopy.categories;
    this.card.price = this.cardCopy.price;
    this.card.img = this.cardCopy.img;
    this.card.pdf = this.cardCopy.pdf;
    this.card.pagesNumber = this.cardCopy.pagesNumber;
  }
  
  onSubmit() {
    this.card.categories = this.card.categories.toString().toLowerCase().split(',');
    for (let i = 0; i < this.card.categories.length; i++) {
      this.card.categories[i] = this.card.categories[i].trim();
    }
    this.card.price = this.card.price.replace(new RegExp(/[.]/g), ",")
    this.saveCard();
  }
  public cancelBtn(): void {
    let data: any = {
      isChange: false
    }
    this.dialogRef.close(data)
  }
  public saveCard(): void {
    let data: any = {
      isChange: true,
      card: this.card
    }
    this.dialogRef.close(data)
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, {panelClass: ['animate__animated', 'animate__backInDown']});
    if (!this.isNew) {
      dialogRef.componentInstance.message = "Se han actualizado los datos de la partitura";
    } else if (this.isNew) {
      dialogRef.componentInstance.message = "Se ha creado la partitura correctamente";
}}}