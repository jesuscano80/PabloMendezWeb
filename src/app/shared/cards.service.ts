import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  // public addToCart: Card[] = [];
  public addToCart: Card[] = [
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

  constructor() { }
}