import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNewsManageComponent } from './content.news.manage.component';

describe('ContentNewsManageComponent', () => {
  let component: ContentNewsManageComponent;
  let fixture: ComponentFixture<ContentNewsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentNewsManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNewsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
