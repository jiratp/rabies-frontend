import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTypeManageComponent } from './department.type.manage.component';

describe('DepartmentTypeManageComponent', () => {
  let component: DepartmentTypeManageComponent;
  let fixture: ComponentFixture<DepartmentTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
