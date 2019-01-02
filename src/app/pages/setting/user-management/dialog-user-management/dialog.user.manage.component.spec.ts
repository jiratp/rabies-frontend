import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserManageComponent } from './dialog.user.manage.component';

describe('DialogUserManageComponent', () => {
  let component: DialogUserManageComponent;
  let fixture: ComponentFixture<DialogUserManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
