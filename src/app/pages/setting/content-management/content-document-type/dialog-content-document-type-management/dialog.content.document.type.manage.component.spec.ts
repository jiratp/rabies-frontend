import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentDocumentTypeManageComponent } from './dialog.content.document.type.manage.component';

describe('DialogContentDocumentTypeManageComponent', () => {
  let component: DialogContentDocumentTypeManageComponent;
  let fixture: ComponentFixture<DialogContentDocumentTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogContentDocumentTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentDocumentTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
