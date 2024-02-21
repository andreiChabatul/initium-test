import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTableHeaderComponent } from './item-table-header.component';

describe('ItemTableHeaderComponent', () => {
  let component: ItemTableHeaderComponent;
  let fixture: ComponentFixture<ItemTableHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTableHeaderComponent]
    });
    fixture = TestBed.createComponent(ItemTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
