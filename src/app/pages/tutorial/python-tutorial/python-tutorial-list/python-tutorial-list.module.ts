import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PythonTutorialListRoutingModule } from './python-tutorial-list-routing.module';
import { PythonTutorialListComponent } from './python-tutorial-list.component';


@NgModule({
  declarations: [
    PythonTutorialListComponent
  ],
  imports: [
    CommonModule,
    PythonTutorialListRoutingModule
  ]
})
export class PythonTutorialListModule { }
