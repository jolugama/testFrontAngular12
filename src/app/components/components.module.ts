import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';

import { ColorsThemePipe } from '../pipes/colors-theme.pipe';

import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiCardComponent } from './ui-card/ui-card.component';


const COMPONENTS = [
  UiButtonComponent,
  UiCardComponent
];

const PIPES = [
  ColorsThemePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    UiCardComponent
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
