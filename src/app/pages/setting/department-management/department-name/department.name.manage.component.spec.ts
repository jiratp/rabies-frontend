import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNameManageComponent } from './department.name.manage.component';

describe('DepartmentNameManageComponent', () => {
  let component: DepartmentNameManageComponent;
  let fixture: ComponentFixture<DepartmentNameManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentNameManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentNameManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
