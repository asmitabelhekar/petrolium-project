import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./pages/addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'updatebalance',
    loadChildren: () => import('./pages/updatebalance/updatebalance.module').then( m => m.UpdatebalancePageModule)
  },
  {
    path: 'showbalancerecord',
    loadChildren: () => import('./pages/showbalancerecord/showbalancerecord.module').then( m => m.ShowbalancerecordPageModule)
  },
  {
    path: 'sliderimages',
    loadChildren: () => import('./pages/sliderimages/sliderimages.module').then( m => m.SliderimagesPageModule)
  },
  {
    path: 'customerdetil',
    loadChildren: () => import('./pages/customerdetil/customerdetil.module').then( m => m.CustomerdetilPageModule)
  },
  {
    path: 'dataentryopening',
    loadChildren: () => import('./pages/dataentryopening/dataentryopening.module').then( m => m.DataentryopeningPageModule)
  },
  {
    path: 'dataentrycredit',
    loadChildren: () => import('./pages/dataentrycredit/dataentrycredit.module').then( m => m.DataentrycreditPageModule)
  },
  {
    path: 'debitamount',
    loadChildren: () => import('./pages/debitamount/debitamount.module').then( m => m.DebitamountPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'petroldieselamount',
    loadChildren: () => import('./pages/petroldieselamount/petroldieselamount.module').then( m => m.PetroldieselamountPageModule)
  },
  {
    path: 'tanker',
    loadChildren: () => import('./pages/tanker/tanker.module').then( m => m.TankerPageModule)
  },
  {
    path: 'reportlist',
    loadChildren: () => import('./pages/reportlist/reportlist.module').then( m => m.ReportlistPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
