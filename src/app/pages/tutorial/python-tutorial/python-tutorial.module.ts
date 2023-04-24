import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTutorialRoutingModule } from './python-tutorial-routing.module';
import { PythonTutorialComponent } from './python-tutorial.component';


@NgModule({
  declarations: [
    PythonTutorialComponent
  ],
  imports: [
    CommonModule,
    PythonTutorialRoutingModule
  ]
})
export class PythonTutorialModule { }
