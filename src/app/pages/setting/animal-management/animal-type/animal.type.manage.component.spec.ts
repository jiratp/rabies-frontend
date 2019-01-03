import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTypeManageComponent } from './animal.type.manage.component';

describe('AnimalTypeManageComponent', () => {
  let component: AnimalTypeManageComponent;
  let fixture: ComponentFixture<AnimalTypeManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalTypeManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalTypeManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
