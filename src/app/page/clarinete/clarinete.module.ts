import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClarinetePageRoutingModule } from './clarinete-routing.module';

import { ClarinetePage } from './clarinete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClarinetePageRoutingModule
  ],
  declarations: [ClarinetePage]
})
export class ClarinetePageModule {}
