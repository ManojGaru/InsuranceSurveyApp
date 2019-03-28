import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclepolicydetailsPage } from './vehiclepolicydetails.page';

describe('VehiclepolicydetailsPage', () => {
  let component: VehiclepolicydetailsPage;
  let fixture: ComponentFixture<VehiclepolicydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclepolicydetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclepolicydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
