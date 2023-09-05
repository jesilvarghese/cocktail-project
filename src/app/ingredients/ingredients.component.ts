import { Component } from '@angular/core';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  ingredientList: any;
  list:any

  constructor(private service :CocktailService) {
    this.service.getInfo().subscribe(data =>{
      this.list = data;
      this.ingredientList = this.list.drinks;
    })
  }
}
