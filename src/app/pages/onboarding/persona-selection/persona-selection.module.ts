import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonaSelectionPageRoutingModule } from './persona-selection-routing.module';

import { PersonaSelectionPage } from './persona-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonaSelectionPageRoutingModule
  ],
  declarations: [PersonaSelectionPage]
})
export class PersonaSelectionPageModule {}
