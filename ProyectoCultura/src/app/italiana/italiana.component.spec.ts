import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianaComponent } from './italiana.component';

describe('ItalianaComponent', () => {
  let component: ItalianaComponent;
  let fixture: ComponentFixture<ItalianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItalianaComponent]
    });
    fixture = TestBed.createComponent(ItalianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
