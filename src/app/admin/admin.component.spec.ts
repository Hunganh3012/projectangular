import { ComponentFixture, TestBed } from '@angular/core/testing';

import { adminComponent } from './admin.component';

describe('UserComponent', () => {
  let component: adminComponent;
  let fixture: ComponentFixture<adminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ adminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
