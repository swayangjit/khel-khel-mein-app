import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtpSubmissionPage } from './otp-submission.page';

describe('OtpSubmissionPage', () => {
  let component: OtpSubmissionPage;
  let fixture: ComponentFixture<OtpSubmissionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OtpSubmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
