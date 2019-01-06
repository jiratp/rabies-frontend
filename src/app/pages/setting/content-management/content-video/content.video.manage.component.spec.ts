import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVideoManageComponent } from './content.video.manage.component';

describe('ContentVideoManageComponent', () => {
  let component: ContentVideoManageComponent;
  let fixture: ComponentFixture<ContentVideoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentVideoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVideoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
