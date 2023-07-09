import { Component } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Wada Pav", "bread and potato", "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav.jpg"),
    new Recipe("Wada Pav", "bread and potato", "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav.jpg"),
  ]

}
