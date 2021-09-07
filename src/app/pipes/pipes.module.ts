import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsThemePipe } from './colors-theme.pipe';



@NgModule({
  declarations: [
    ColorsThemePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
