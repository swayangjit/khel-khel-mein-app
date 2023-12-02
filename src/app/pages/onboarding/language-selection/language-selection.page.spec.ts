import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageSelectionPage } from './language-selection.page';

describe('LanguageSelectionPage', () => {
  let component: LanguageSelectionPage;
  let fixture: ComponentFixture<LanguageSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LanguageSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
