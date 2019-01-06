import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentNewsManageComponent } from './dialog.content.news.manage.component';

describe('DialogContentNewsManageComponent', () => {
  let component: DialogContentNewsManageComponent;
  let fixture: ComponentFixture<DialogContentNewsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentNewsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentNewsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
