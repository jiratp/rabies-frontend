import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalInfomationComponent } from './animal.information.component';

describe('AnimalInfomationComponent', () => {
  let component: AnimalInfomationComponent;
  let fixture: ComponentFixture<AnimalInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
