import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarinetePage } from './clarinete.page';

describe('ClarinetePage', () => {
  let component: ClarinetePage;
  let fixture: ComponentFixture<ClarinetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClarinetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
