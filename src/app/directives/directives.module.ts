import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRippleDirective } from './ui-ripple.directive';
import { NoDblClickDirective } from './no-dbl-click.directive';



@NgModule({
  declarations: [
    UiRippleDirective,
    NoDblClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiRippleDirective,
    NoDblClickDirective
  ]
})
export class DirectivesModule { }
