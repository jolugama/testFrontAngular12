import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';

import { StarshipsComponent } from './starships.component';


@NgModule({
  declarations: [
    StarshipsComponent
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    DirectivesModule,
    ComponentsModule
  ]
})
export class StarshipsModule { }
