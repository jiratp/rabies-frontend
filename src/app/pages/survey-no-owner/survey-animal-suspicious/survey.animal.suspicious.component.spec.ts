import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnimalSuspiciousComponent } from './survey.animal.suspicious.component';

describe('SurveyAnimalSuspiciousComponent', () => {
  let component: SurveyAnimalSuspiciousComponent;
  let fixture: ComponentFixture<SurveyAnimalSuspiciousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnimalSuspiciousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnimalSuspiciousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
