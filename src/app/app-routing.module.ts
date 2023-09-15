import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'guitarra',
    loadChildren: () => import('./page/guitarra/guitarra.module').then( m => m.GuitarraPageModule)
  },
  {
    path: 'clarinete',
    loadChildren: () => import('./page/clarinete/clarinete.module').then( m => m.ClarinetePageModule)
  },
  {
    path: 'violao',
    loadChildren: () => import('./page/violao/violao.module').then( m => m.ViolaoPageModule)
  },
  {
    path: 'trombone',
    loadChildren: () => import('./page/trombone/trombone.module').then( m => m.TrombonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
