import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyPitaraPage } from './my-pitara.page';

describe('MyPitaraPage', () => {
  let component: MyPitaraPage;
  let fixture: ComponentFixture<MyPitaraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyPitaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
