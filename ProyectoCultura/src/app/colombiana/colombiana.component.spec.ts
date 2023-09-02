import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombianaComponent } from './colombiana.component';

describe('ColombianaComponent', () => {
  let component: ColombianaComponent;
  let fixture: ComponentFixture<ColombianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColombianaComponent]
    });
    fixture = TestBed.createComponent(ColombianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
