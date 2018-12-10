import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictManagementComponent } from './district.management.component';

describe('DistrictManagementComponent', () => {
  let component: DistrictManagementComponent;
  let fixture: ComponentFixture<DistrictManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
