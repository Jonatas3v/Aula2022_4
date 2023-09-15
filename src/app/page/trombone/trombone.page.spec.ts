import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrombonePage } from './trombone.page';

describe('TrombonePage', () => {
  let component: TrombonePage;
  let fixture: ComponentFixture<TrombonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrombonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
