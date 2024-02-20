import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMaterialComponent } from './button-material.component';

describe('ButtonMaterialComponent', () => {
  let component: ButtonMaterialComponent;
  let fixture: ComponentFixture<ButtonMaterialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonMaterialComponent]
    });
    fixture = TestBed.createComponent(ButtonMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
