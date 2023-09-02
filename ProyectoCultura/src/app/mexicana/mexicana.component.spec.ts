import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanaComponent } from './mexicana.component';

describe('MexicanaComponent', () => {
  let component: MexicanaComponent;
  let fixture: ComponentFixture<MexicanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MexicanaComponent]
    });
    fixture = TestBed.createComponent(MexicanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
