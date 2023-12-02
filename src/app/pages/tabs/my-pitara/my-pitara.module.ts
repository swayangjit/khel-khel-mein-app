import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPitaraPageRoutingModule } from './my-pitara-routing.module';

import { MyPitaraPage } from './my-pitara.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPitaraPageRoutingModule
  ],
  declarations: [MyPitaraPage]
})
export class MyPitaraPageModule {}
