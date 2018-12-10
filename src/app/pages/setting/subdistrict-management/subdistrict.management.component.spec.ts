import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdistrictManagementComponent } from './subdistrict.management.component';

describe('SubdistrictManagementComponent', () => {
  let component: SubdistrictManagementComponent;
  let fixture: ComponentFixture<SubdistrictManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubdistrictManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdistrictManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
