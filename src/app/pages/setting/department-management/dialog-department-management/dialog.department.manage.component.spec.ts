import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDepartmentManageComponent } from './dialog.department.manage.component';

describe('DialogDepartmentManageComponent', () => {
  let component: DialogDepartmentManageComponent;
  let fixture: ComponentFixture<DialogDepartmentManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDepartmentManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDepartmentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
