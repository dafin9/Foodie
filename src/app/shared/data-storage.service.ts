import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription, exhaustMap, map, take, tap } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService implements OnDestroy {

  subSaveData: Subscription;
  subFetchData: Subscription;

  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authRecipe: AuthService) { }

  storeRecipes() {
    const recipe = this.recipeService.getRecipes();
    this.subSaveData = this.http.put('https://ng-course-recipe-book-c4cfa-default-rtdb.firebaseio.com/recipe.json', recipe).subscribe((response) => {
      console.log(response);
    });
  }

  fetchData() {
    return this.http.get<Recipe[]>('https://ng-course-recipe-book-c4cfa-default-rtdb.firebaseio.com/recipe.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
    )
  }

  ngOnDestroy(): void {
    this.subSaveData.unsubscribe();
    this.subFetchData.unsubscribe();
  }
}
