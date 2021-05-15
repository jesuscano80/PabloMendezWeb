import { Injectable } from '@angular/core';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  public addToCart: Card[] = [];

  constructor() { }
}