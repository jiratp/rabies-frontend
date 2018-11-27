import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNoOwnerComponent } from './report.noowner.component';

describe('ReportNoOwnerComponent', () => {
  let component: ReportNoOwnerComponent;
  let fixture: ComponentFixture<ReportNoOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNoOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
