import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMapComponent } from './change-map.component';

describe('ChangeMapComponent', () => {
  let component: ChangeMapComponent;
  let fixture: ComponentFixture<ChangeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
