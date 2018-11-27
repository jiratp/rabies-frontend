import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHasOwnerComponent } from './report.hasowner.component';

describe('ReportHasOwnerComponent', () => {
  let component: ReportHasOwnerComponent;
  let fixture: ComponentFixture<ReportHasOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHasOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHasOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
