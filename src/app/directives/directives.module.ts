import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRippleDirective } from './ui-ripple.directive';



@NgModule({
  declarations: [
    UiRippleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiRippleDirective
  ]
})
export class DirectivesModule { }
