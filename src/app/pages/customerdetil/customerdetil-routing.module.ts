import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerdetilPage } from './customerdetil.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerdetilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerdetilPageRoutingModule {}
