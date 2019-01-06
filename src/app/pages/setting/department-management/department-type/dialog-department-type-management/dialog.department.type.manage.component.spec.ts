import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepartmentTypeManageComponent } from './dialog.department.type.manage.component';

describe('DialogDepartmentTypeManageComponent', () => {
  let component: DialogDepartmentTypeManageComponent;
  let fixture: ComponentFixture<DialogDepartmentTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDepartmentTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDepartmentTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
