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
    console.log(this.card);
    
  }
  onSubmit() {
    console.log(this.card);
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
    dialogRef.componentInstance.message = "Se han actualizado los datos de la partitura";
  }
}
