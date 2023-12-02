import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtpSubmissionPage } from './otp-submission.page';

const routes: Routes = [
  {
    path: '',
    component: OtpSubmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtpSubmissionPageRoutingModule {}
