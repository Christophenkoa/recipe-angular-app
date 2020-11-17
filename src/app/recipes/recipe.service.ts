import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test',
      'https://www.eatwell101.com/wp-content/uploads/2019/04/chicken-and-asparagus-skillet-recipe-2.jpg')
  ];

  // tslint:disable-next-line:typedef
  public getRecipes() {
    return this.recipes.slice();
  }

  // tslint:disable-next-line:typedef
  public getRecipe(index: number) {
    return this.recipes[index];
  }
}
