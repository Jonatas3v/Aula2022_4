import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrombonePage } from './trombone.page';

const routes: Routes = [
  {
    path: '',
    component: TrombonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrombonePageRoutingModule {}
