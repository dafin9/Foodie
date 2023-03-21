import { Injectable } from '@angular/core'
import { Recipe } from "./recipe.model";
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipeChanged = new Subject<Recipe[]>;

    recipes: Recipe[] = [];

    // recipes: Recipe[] = [
    //     new Recipe('The Router Test',
    //         'This is the test only',
    //         'https://imgs.search.brave.com/dE7uP4yyL-330glOyCUqvztRstiYVs5QnOMUMb3omdo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL2V4cHMy/ODgwMF9VRzE0MzM3/N0QxMl8xOF8xYl9S/TVMuanBn',
    //         [
    //             new Ingredients('Tomotoes', 10),
    //             new Ingredients('Tomotoes', 10)
    //         ]),

    //     new Recipe('The Test 2 ',
    //         'This is the test only 2',
    //         'https://imgs.search.brave.com/tWhjKGYuLFXd2ffnbwr1IAfCIex6QSb2z14c4KZ1tpE/rs:fit:722:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5H/NEFmckFRTWRBcjRa/OGl1WFR5cFJBSGFF/MyZwaWQ9QXBp',
    //         [
    //             new Ingredients('Lemon', 12),
    //             new Ingredients('Lemon', 12)
    //         ])
    // ];

    constructor(private slService: ShoppingListService) {

    }
    setRecipes(recipes : Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }


    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

   

    addIngredientsToShoppingList(ingredients: Ingredients[]) {
        this.slService.addIngredientss(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}