import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolaoPage } from './violao.page';

const routes: Routes = [
  {
    path: '',
    component: ViolaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolaoPageRoutingModule {}
