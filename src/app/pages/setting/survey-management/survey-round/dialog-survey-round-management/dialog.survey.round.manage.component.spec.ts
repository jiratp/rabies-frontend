import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSurveyRoundManageComponent } from './dialog.survey.round.manage.component';

describe('DialogSurveyRoundManageComponent', () => {
  let component: DialogSurveyRoundManageComponent;
  let fixture: ComponentFixture<DialogSurveyRoundManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSurveyRoundManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSurveyRoundManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
