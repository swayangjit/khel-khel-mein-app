import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPitaraPage } from './my-pitara.page';

const routes: Routes = [
  {
    path: '',
    component: MyPitaraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPitaraPageRoutingModule {}
