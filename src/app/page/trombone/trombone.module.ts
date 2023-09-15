import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrombonePageRoutingModule } from './trombone-routing.module';

import { TrombonePage } from './trombone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrombonePageRoutingModule
  ],
  declarations: [TrombonePage]
})
export class TrombonePageModule {}
