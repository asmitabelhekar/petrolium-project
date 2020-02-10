import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowbalancerecordPage } from './showbalancerecord.page';

const routes: Routes = [
  {
    path: '',
    component: ShowbalancerecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowbalancerecordPageRoutingModule {}
