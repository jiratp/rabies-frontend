import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRoleManageComponent } from './dialog.role.manage.component';

describe('DialogRoleManageComponent', () => {
  let component: DialogRoleManageComponent;
  let fixture: ComponentFixture<DialogRoleManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRoleManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRoleManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
