import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClarinetePage } from './clarinete.page';

const routes: Routes = [
  {
    path: '',
    component: ClarinetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClarinetePageRoutingModule {}
