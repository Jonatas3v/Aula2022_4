import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolaoPageRoutingModule } from './violao-routing.module';

import { ViolaoPage } from './violao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolaoPageRoutingModule
  ],
  declarations: [ViolaoPage]
})
export class ViolaoPageModule {}
