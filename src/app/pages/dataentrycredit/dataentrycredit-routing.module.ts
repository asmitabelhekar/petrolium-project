import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataentrycreditPage } from './dataentrycredit.page';

const routes: Routes = [
  {
    path: '',
    component: DataentrycreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataentrycreditPageRoutingModule {}
