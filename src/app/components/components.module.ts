import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { DirectivesModule } from '../directives/directives.module';


const COMPONENTS = [
  UiButtonComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
