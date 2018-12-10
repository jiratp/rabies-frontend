import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPetRegisterComponent } from './individual.pet.register.component';

describe('IndividualPetRegisterComponent', () => {
  let component: IndividualPetRegisterComponent;
  let fixture: ComponentFixture<IndividualPetRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualPetRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
