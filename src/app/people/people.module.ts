import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';


import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    DirectivesModule,
    ComponentsModule
  ]
})
export class PeopleModule { }
