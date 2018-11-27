import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNoOwnerComponent } from './survey.noowner.component';

describe('SurveyNoOwnerComponent', () => {
  let component: SurveyNoOwnerComponent;
  let fixture: ComponentFixture<SurveyNoOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyNoOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNoOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
