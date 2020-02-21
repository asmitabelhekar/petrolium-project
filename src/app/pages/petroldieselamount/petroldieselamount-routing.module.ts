import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetroldieselamountPage } from './petroldieselamount.page';

const routes: Routes = [
  {
    path: '',
    component: PetroldieselamountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetroldieselamountPageRoutingModule {}
