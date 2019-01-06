import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDocumentTypeManageComponent } from './content.document.type.manage.component';

describe('ContentDocumentTypeManageComponent', () => {
  let component: ContentDocumentTypeManageComponent;
  let fixture: ComponentFixture<ContentDocumentTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDocumentTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDocumentTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
