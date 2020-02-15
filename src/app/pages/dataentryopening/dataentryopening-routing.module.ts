import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataentryopeningPage } from './dataentryopening.page';

const routes: Routes = [
  {
    path: '',
    component: DataentryopeningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataentryopeningPageRoutingModule {}
