  import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/card';
import { CardsService } from '../../shared/cards.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cards: Card[] = [];
  public totalPrice: number = 0;

  constructor(
    private cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.cards = this.cardsService.addToCart
    this.calculateTotalPrice();
  }

  private calculateTotalPrice() {
    this.totalPrice = 0;
    this.cards.forEach((card) => {
      this.totalPrice += Number(card.price.replace(new RegExp(/[,]/g), "."));
  });}
}