import { Component, OnInit, EventEmitter, Output} from '@angular/core';


import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://stateofdinner.com/wp-content/uploads/2021/04/Pasta_With_Ricotta_Cooked_Overhead.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://stateofdinner.com/wp-content/uploads/2021/04/Pasta_With_Ricotta_Cooked_Overhead.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}

