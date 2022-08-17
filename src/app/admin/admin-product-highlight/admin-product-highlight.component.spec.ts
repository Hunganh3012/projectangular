import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductHighlightComponent } from './admin-product-highlight.component';

describe('AdminProductHighlightComponent', () => {
  let component: AdminProductHighlightComponent;
  let fixture: ComponentFixture<AdminProductHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
