import { Subject } from 'rxjs';
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>;
    private ingredients: Ingredients[] = [
        new Ingredients('Apple', 3),
        new Ingredients('Orange', 9),
        new Ingredients('Banana', 6)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredients(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        // console.log(this.ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientss(ingredients: Ingredients[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number , newIngredient:Ingredients){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice())
    }


}