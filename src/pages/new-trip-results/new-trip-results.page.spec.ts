import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTripResultsPage } from './new-trip-results.page';

describe('NewTripResultsPage', () => {
  let component: NewTripResultsPage;
  let fixture: ComponentFixture<NewTripResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTripResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTripResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
