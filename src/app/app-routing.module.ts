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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
