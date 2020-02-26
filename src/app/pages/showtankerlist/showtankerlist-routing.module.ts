import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtankerlistPage } from './showtankerlist.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtankerlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtankerlistPageRoutingModule {}
