import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSymptomManageComponent } from './animal.symptom.manage.component';

describe('AnimalSymptomManageComponent', () => {
  let component: AnimalSymptomManageComponent;
  let fixture: ComponentFixture<AnimalSymptomManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSymptomManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSymptomManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
