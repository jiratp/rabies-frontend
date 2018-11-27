import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAnimalInformationComponent } from './survey.animal.information.component';

describe('SurveyAnimalInformationComponent', () => {
  let component: SurveyAnimalInformationComponent;
  let fixture: ComponentFixture<SurveyAnimalInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAnimalInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAnimalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
