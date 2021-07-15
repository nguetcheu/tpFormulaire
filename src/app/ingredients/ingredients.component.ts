import {Component, OnInit} from '@angular/core';
import {IngredientsModel} from "./ingredients-model";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  amount = 0;
  quantity = 0;
  name = '';

  ingredients: IngredientsModel[] = [new IngredientsModel('tomate', 100, 5), new IngredientsModel('riri', 200, 6)];

  constructor() {
  }

  ngOnInit(): void {
  }


  addIngredients() {
    this.ingredients.push({
      name: this.name,
      quantity: this.quantity,
      amount: this.amount
    })
  }
}
