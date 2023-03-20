import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit , OnDestroy{
  ingredients: Ingredients[];
  private igChnageSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChnageSub = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredients[]) => { this.ingredients = ingredient }
    )
  }

  ngOnDestroy(): void {
      this.igChnageSub.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

  onEditItem(index){
    this.shoppingListService.startedEditing.next(index);
  }

}
