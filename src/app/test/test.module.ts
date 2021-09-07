import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { DirectivesModule } from '../directives/directives.module';

import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    DirectivesModule
  ],
  exports:[
    
  ]
})
export class TestModule { }
