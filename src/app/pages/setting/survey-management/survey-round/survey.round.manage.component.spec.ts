import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyRoundManageComponent } from './survey.round.manage.component';

describe('SurveyRoundManageComponent', () => {
  let component: SurveyRoundManageComponent;
  let fixture: ComponentFixture<SurveyRoundManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyRoundManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyRoundManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
