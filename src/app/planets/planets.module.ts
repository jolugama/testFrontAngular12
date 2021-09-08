import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';

import { PlanetsComponent } from './planets.component';

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    DirectivesModule,
    ComponentsModule
  ]
})
export class PlanetsModule { }
