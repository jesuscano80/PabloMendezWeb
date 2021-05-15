import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/login.service';
import { CardsService } from '../../shared/cards.service';
import { MatDialog } from '@angular/material/dialog';
import { SimpleNotificationComponent } from '../../modals/simple-notification/simple-notification.component';
import { Card } from '../../models/card';
import { TwoWaysNotificationComponent } from '../../modals/two-ways-notification/two-ways-notification.component';
import { EditScoreComponent } from '../../modals/edit-score/edit-score.component';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  // Save data of scores
  public cards: Card[];

  // Use for open and close an especific score
  public selected = 0;
  public checkCard = false;
  public forward = false;

  // For save all categories available for the search select
  public categories: string[] = [];

  // For save te count of items to buy
  public countItems: number;

  constructor(
    public loginService: LoginService,
    private cardsService: CardsService,
    private matDialog: MatDialog
  ) {
    
    // For create the cards with the data of BBDD
    //----------//----------//----------//----------//----------
    this.cards = [
      new Card(
        "id1",
        'Esta carta es de prueba',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id2",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id3",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id4",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id5",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id6",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id7",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id8",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      )
    ];
    //----------//----------//----------//----------//----------

    // Create function for create not repeat categories for select
    const pushIfNotExists = (array: any[], element: any): void => {
      let isInArray: boolean = false;
      let index: number = 0;
      while ((index < array.length) && !isInArray) {
        if(array[index] == element) {isInArray = true};
        index++;
      }
      if (!isInArray) {array.push(element)}
    }

    // This code convert all categories strings to Upercase for view of client
    this.cards.forEach((e: any) => {
      e.categories = e.categories.map((e: any) => {
        e = ' ' + e.charAt(0).toUpperCase() + e.slice(1);
        pushIfNotExists(this.categories, e);
        return e;
    });});
    this.countItems = this.cardsService.addToCart.length;
  }

  ngOnInit(): void {
    const dialogRef = this.matDialog.open(EditScoreComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.cardCopy = this.cards[1];
  }

  // This method save all cards to buy in a propierty of cardsService and update coutItems variable
  addToCart(card: any): void {
    this.cardsService.addToCart.push(card);
    this.countItems = this.cardsService.addToCart.length;
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = "Obra añadida al carrito de compra";
    dialogRef.afterClosed().subscribe();
  }

  // This function open modal for edit or delete the selected card
  toEdit(card: any, index: number): void {
    const dialogRef = this.matDialog.open(TwoWaysNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = "Elige una opción";
    dialogRef.componentInstance.cardCopy = card;
    dialogRef.afterClosed().subscribe(data => {
      if(data && (data.typeOfChange === "delete")) {
        this.cards.splice(index, 1);
        this.hideSelectedCard();
      // If client want make any change, open a new modal called EditScoreComponent
      } else if (data && (data.typeOfChange === "modify")) {
        const dialogRef = this.matDialog.open(EditScoreComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
        dialogRef.componentInstance.cardCopy = card;
        dialogRef.afterClosed().subscribe(data => {
          if (data && data.isChange) {this.cards[index];}
  });}});}

  // -----Design functions-----
  // ----------//----------//----------//----------//----------
  public selectCard(select: number = 0): void {
    if (!this.forward) {
      this.checkCard = true;
      this.selected = select + 1;
  }}
  public hideSelectedCard(): void {
    if (this.checkCard === false) {
      this.selected = 0;
    }
    this.checkCard = false;
    this.forward = false;
  }
  public backForward(): void {
    this.forward = true;
  }
  // ----------//----------//----------//----------//----------

}
