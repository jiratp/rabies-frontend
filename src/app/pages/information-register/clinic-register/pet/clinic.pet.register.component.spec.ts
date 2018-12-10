import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicPetRegisterComponent } from './clinic.pet.register.component';

describe('ClinicPetRegisterComponent', () => {
  let component: ClinicPetRegisterComponent;
  let fixture: ComponentFixture<ClinicPetRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicPetRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicPetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
