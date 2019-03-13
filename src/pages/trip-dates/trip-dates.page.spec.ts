import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDatesPage } from './trip-dates.page';

describe('TripDatesPage', () => {
  let component: TripDatesPage;
  let fixture: ComponentFixture<TripDatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
