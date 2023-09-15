import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViolaoPage } from './violao.page';

describe('ViolaoPage', () => {
  let component: ViolaoPage;
  let fixture: ComponentFixture<ViolaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViolaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
