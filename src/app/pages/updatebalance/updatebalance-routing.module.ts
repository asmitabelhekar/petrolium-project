import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatebalancePage } from './updatebalance.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatebalancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatebalancePageRoutingModule {}
