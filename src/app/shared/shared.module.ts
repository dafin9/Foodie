import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directives';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective,
    LoadingSpinnerComponent],

  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    DropdownDirective,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedModule { }
