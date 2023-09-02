import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancesaComponent } from './francesa.component';

describe('FrancesaComponent', () => {
  let component: FrancesaComponent;
  let fixture: ComponentFixture<FrancesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrancesaComponent]
    });
    fixture = TestBed.createComponent(FrancesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
