import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PythonTutorialComponent } from './python-tutorial.component';

const routes: Routes = [{ path: '', component: PythonTutorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PythonTutorialRoutingModule { }
