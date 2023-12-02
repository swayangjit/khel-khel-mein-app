import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtpSubmissionPageRoutingModule } from './otp-submission-routing.module';

import { OtpSubmissionPage } from './otp-submission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtpSubmissionPageRoutingModule
  ],
  declarations: [OtpSubmissionPage]
})
export class OtpSubmissionPageModule {}
