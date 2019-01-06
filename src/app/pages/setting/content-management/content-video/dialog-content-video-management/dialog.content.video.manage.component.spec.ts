import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentVideoManageComponent } from './dialog.content.video.manage.component';

describe('DialogContentVideoManageComponent', () => {
  let component: DialogContentVideoManageComponent;
  let fixture: ComponentFixture<DialogContentVideoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentVideoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentVideoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
