import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeacrhTableHeaderComponent } from './seacrh-table-header.component';

describe('SeacrhTableHeaderComponent', () => {
  let component: SeacrhTableHeaderComponent;
  let fixture: ComponentFixture<SeacrhTableHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeacrhTableHeaderComponent]
    });
    fixture = TestBed.createComponent(SeacrhTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
