import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderimagesPage } from './sliderimages.page';

const routes: Routes = [
  {
    path: '',
    component: SliderimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderimagesPageRoutingModule {}
