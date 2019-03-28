import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsureddetailsPage } from './insureddetails.page';

describe('InsureddetailsPage', () => {
  let component: InsureddetailsPage;
  let fixture: ComponentFixture<InsureddetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsureddetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsureddetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
