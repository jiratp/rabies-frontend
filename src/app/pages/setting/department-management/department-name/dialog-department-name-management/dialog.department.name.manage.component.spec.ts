import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepartmentNameManageComponent } from './dialog.department.name.manage.component';

describe('DialogDepartmentNameManageComponent', () => {
  let component: DialogDepartmentNameManageComponent;
  let fixture: ComponentFixture<DialogDepartmentNameManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDepartmentNameManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDepartmentNameManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
