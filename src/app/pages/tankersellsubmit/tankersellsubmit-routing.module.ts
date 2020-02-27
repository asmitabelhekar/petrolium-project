import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankersellsubmitPage } from './tankersellsubmit.page';

const routes: Routes = [
  {
    path: '',
    component: TankersellsubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankersellsubmitPageRoutingModule {}
