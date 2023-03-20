import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { RecipesComponent } from "../recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list.component";
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

const appRoutes : Routes = [
    {path:'' , redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes' , component: RecipesComponent , children:[
        {path:'' , component: RecipeStartComponent},
        {path:'new' , component: RecipeEditComponent },
        {path:':id' , component: RecipeDetailComponent},
        // {path:'new' , component: RecipeEditComponent }, <- it will not load because of routing put it above :id to run smoothly
        {path: ':id/edit' , component: RecipeEditComponent}
    ]},
    {path:'shopping-list' , component: ShoppingListComponent}
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule{

}