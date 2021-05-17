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

  // Use for open and close cart
  public cart: boolean = false;
  // public cart: boolean = true;

  // Use for open and close an especific score
  public selected: number = 0;
  public checkCard: boolean = false;
  public forward: boolean = false;

  // For save all categories available for the search select
  public categories: string[] = [];

  // For save te count of items to buy
  public countItems: number = 0;

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
        ['dúos', 'guitarra'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id2",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos', 'piano', 'piano', 'saxo'],
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ',
        "pdf",
        '/assets/partituraPrueba.jpg',
        4
      ),
      new Card(
        "id3",
        'Delaroom: Pierdo el Hilo partitura para 2 guitarras',
        '49,99',
        ['guitarra', 'dúos', 'saxo'],
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
  }
  
  ngOnInit(): void {
    this.createCategories();
    this.countItems = this.cardsService.addToCart.length;
  }

  // Create function for create not repeat categories for select
  public createCategories() {
    this.categories = [];
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
    this.cards.forEach((e1: any) => {
      e1.categories = e1.categories.map((e2: any) => {
        e2 = e2.trim();
        e2 = ' ' + e2.charAt(0).toUpperCase() + e2.slice(1);
        pushIfNotExists(this.categories, e2.slice(1));
        if(" "+e1.categories[0].toLowerCase() == e2.toLowerCase()) {e2 = e2.slice(1)}
        return e2;
  });});
}
  // This method open cart component
  public openCart() {
    this.cart = !this.cart;
  }

  // This method save all cards to buy in a propierty of cardsService and update coutItems variable
  public addToCart(card: any): void {
    this.cardsService.addToCart.push(card);
    this.countItems = this.cardsService.addToCart.length;
    const dialogRef = this.matDialog.open(SimpleNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = "Obra añadida al carrito de compra";
    dialogRef.afterClosed().subscribe();
  }

  // This method add a new score
  public addNewScore() {
    const dialogRef = this.matDialog.open(EditScoreComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.cardCopy = new Card();
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.isChange) {
        this.cards.unshift(data.card);
        this.createCategories();
        this.hideSelectedCard();
  }});}

  // This function open modal for edit or delete the selected card
  public toEdit(card: any, index: number): void {
    const dialogRef = this.matDialog.open(TwoWaysNotificationComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
    dialogRef.componentInstance.message = "Elige una opción";
    dialogRef.componentInstance.cardCopy = card;
    dialogRef.afterClosed().subscribe(data => {
      if(data && (data.typeOfChange === "delete")) {
        this.cards.splice(index, 1);
        this.createCategories();
        this.hideSelectedCard();
        // If client want make any change, open a new modal called EditScoreComponent
      } else if (data && (data.typeOfChange === "modify")) {
        const dialogRef = this.matDialog.open(EditScoreComponent, { panelClass: ['animate__animated', 'animate__backInDown'] });
        dialogRef.componentInstance.cardCopy = card;
        dialogRef.componentInstance.isNew = false;
        dialogRef.componentInstance.categoriesDatalist = this.categories;
        dialogRef.afterClosed().subscribe(data => {
          if (data && data.isChange) {
            this.cards[index] = data.card;
            this.createCategories();
            this.hideSelectedCard();
  }});}});}

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