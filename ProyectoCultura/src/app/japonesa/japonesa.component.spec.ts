import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaponesaComponent } from './japonesa.component';

describe('JaponesaComponent', () => {
  let component: JaponesaComponent;
  let fixture: ComponentFixture<JaponesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaponesaComponent]
    });
    fixture = TestBed.createComponent(JaponesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
