import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAnimalListComponent } from './simple.animallist.component';

describe('SimpleAnimalListComponent', () => {
  let component: SimpleAnimalListComponent;
  let fixture: ComponentFixture<SimpleAnimalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAnimalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
