import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentDocumentManageComponent } from './dialog.content.document.manage.component';

describe('DialogContentDocumentManageComponent', () => {
  let component: DialogContentDocumentManageComponent;
  let fixture: ComponentFixture<DialogContentDocumentManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentDocumentManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentDocumentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
