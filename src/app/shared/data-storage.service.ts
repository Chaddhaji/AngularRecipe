import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    // return this.httpClient.put('https://ng-recipe-book-353ca.firebaseio.com/recipes.json', this.recipeService.getRecipes(),
    // {
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-353ca.firebaseio.com/recipes.json', this.recipeService.getRecipes());

    return this.httpClient.request(req);
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-353ca.firebaseio.com/recipes.json')
      .pipe(map(
        (recipes) => {
          for ( const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe((response: any) => {
        const recipes: Recipe[] = response;
        this.recipeService.updateRecipes(recipes);
    });
  }

}
