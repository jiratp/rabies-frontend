import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDocumentManageComponent } from './content.document.manage.component';

describe('ContentDocumentManageComponent', () => {
  let component: ContentDocumentManageComponent;
  let fixture: ComponentFixture<ContentDocumentManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDocumentManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDocumentManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
