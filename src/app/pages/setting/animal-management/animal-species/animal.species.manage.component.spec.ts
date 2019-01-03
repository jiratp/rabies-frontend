import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSpeciesManageComponent } from './animal.species.manage.component';

describe('AnimalSpeciesManageComponent', () => {
  let component: AnimalSpeciesManageComponent;
  let fixture: ComponentFixture<AnimalSpeciesManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSpeciesManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSpeciesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
