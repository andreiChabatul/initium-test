import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMainComponent } from './table-main.component';

describe('TableMainComponent', () => {
  let component: TableMainComponent;
  let fixture: ComponentFixture<TableMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableMainComponent]
    });
    fixture = TestBed.createComponent(TableMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
