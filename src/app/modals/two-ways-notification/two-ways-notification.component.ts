import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimpleNotificationComponent } from '../simple-notification/simple-notification.component';

@Component({
  selector: 'app-two-ways-notification',
  templateUrl: './two-ways-notification.component.html',
  styleUrls: ['./two-ways-notification.component.scss']
})
export class TwoWaysNotificationComponent implements OnInit {

  //----- Design variables -----
  public btn1: string = "Editar";
  public btn2: string = "Eliminar";
  public message = '';
  //----- Data variables -----
  public card: Card = new Card();
  public cardCopy: Card = new Card();

  constructor(
    private dialogRef: MatDialogRef<TwoWaysNotificationComponent>,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // This code copy the binding data between this modal and scoresComponent for save a original copy of data without modifications
    // cardCopy is the original data and card is the variable with you can play and make changes
    // IMPORTANT: card properties need to be assigned one by one for not generate bugs in code
    this.card.id = this.cardCopy.id;
    this.card.title = this.cardCopy.title;
    this.card.description = this.cardCopy.description;
    this.card.price = this.cardCopy.price;
    this.card.img = this.cardCopy.img;
    this.card.pdf = this.cardCopy.pdf;
    this.card.pagesNumber = this.cardCopy.pagesNumber;
  }
  // Controls all of uses for the left button
  public useBtn1(): void {
    // To edit card
    if(this.btn1 === "Editar") {
      let data: any = {
        typeOfChange: "modify",
        card: this.card
      }
      this.dialogRef.close(data);
    // For cancel delete card
    } else if (this.btn1 === "Cancelar") {
      this.btn1 = "Editar";
      this.btn2 = "Eliminar";
      this.message = "Elige una opción";
    }
  }
  // Controls all of uses for the right button
  public useBtn2(): void {
    // For go to delete card
    if(this.btn2 === "Eliminar") {
    this.btn1 = "Cancelar";
    this.btn2 = "Confirmar";
    this.message = `¿Estás seguro de que quieres eliminar la obra: ${this.card.title}?`;
  //For delete card
  } else if (this.btn2 === "Confirmar") {
    // This code start before card is delete from BBDD
    this.card = new Card();
    let data: any = {
      typeOfChange: "delete"
    }
    this.dialogRef.close(data); // This line close the actual modal for not overlap
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = "Se ha eliminado la obra correctamente";
    dialogRef.afterClosed().subscribe();
}}}
