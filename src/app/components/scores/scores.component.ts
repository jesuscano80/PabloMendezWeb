import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  //El any se debe tipear con el modelo correspondiente
  public cards: any;
  // Use for open an especific score
  public selected: number = 0;
  public checkCard: boolean = false;
  // For save all categories available for the search select
  public categories: string[];
  // For save te count of items to buy
  public countItems : number;

  constructor() {

    // For create the categories array with the data of BBDD
    this.categories = ['clásico', 'indie', 'rock', 'jazz', 'blues'].map(e => e.charAt(0).toUpperCase() + e.slice(1));
    // For create the cart button with the data of BBDD
    this.countItems = 1;
    // For create the cards with the data of BBDD
    this.cards = [
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, ",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "De la room: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      },
      {
        scoreImage: "/assets/partituraPrueba.jpg",
        title: "Delaroom: Pierdo el Hilo partitura para 2 guitarras",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quia exercitationem nihil nisi omnis eum harum, dignissimos ratione beatae adipisci, voluptas dolore perspiciatis...",
        category: ["guitarra", "dúos"],
        price: "49,99"
      }
    ]
    this.cards.forEach((e: any) => {
      e.category = e.category.map((e: any) => " " + e.charAt(0).toUpperCase() + e.slice(1));
    })
  }
  ngOnInit(): void {
  }
  //-----Design functions-----
  //----------//----------//----------//----------//----------
  public selectCard(select: number = 0) {
    this.checkCard = true;
    this.selected = select + 1;
    
  }
  public hideSelectedCard() {
    if(this.checkCard === false) {
      this.selected = 0;
    }
    this.checkCard = false;
  }
  //----------//----------//----------//----------//----------
}