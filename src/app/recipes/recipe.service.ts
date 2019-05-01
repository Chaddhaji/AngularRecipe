import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Tasty Diet',
      "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg",
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',30)
      ]),
    new Recipe(
      'Another Test Recipe',
      'This is healthy as hell',
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
      [
        new Ingredient('Bread',3),
        new Ingredient('Banana',2)
      ]),
    new Recipe(
      'Another Test Recipe',
      'Made with Banana and Coco',
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
      [
        new Ingredient('Onine',1),
        new Ingredient('Butter',1)
      ]),
    new Recipe(
      'Another Test Recipe',
      'Non-Veg ',
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
      [
        new Ingredient('Meat',2),
        new Ingredient('Egg',5)
      ]),
    new Recipe(
      'Other Test Recipe',
      'This is simply a test',
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
      [
        new Ingredient('Onine',1),
        new Ingredient('Egg',5)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
