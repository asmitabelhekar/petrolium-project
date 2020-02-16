import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitamountPage } from './debitamount.page';

const routes: Routes = [
  {
    path: '',
    component: DebitamountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitamountPageRoutingModule {}
