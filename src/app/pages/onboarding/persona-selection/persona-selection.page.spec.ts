import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaSelectionPage } from './persona-selection.page';

describe('PersonaSelectionPage', () => {
  let component: PersonaSelectionPage;
  let fixture: ComponentFixture<PersonaSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonaSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
