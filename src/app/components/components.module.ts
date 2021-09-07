import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { DirectivesModule } from '../directives/directives.module';
import { ColorsThemePipe } from '../pipes/colors-theme.pipe';


const COMPONENTS = [
  UiButtonComponent
];

const PIPES = [
  ColorsThemePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
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
