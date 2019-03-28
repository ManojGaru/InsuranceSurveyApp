import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisabilityCheckPage } from './admisability-check.page';

describe('AdmisabilityCheckPage', () => {
  let component: AdmisabilityCheckPage;
  let fixture: ComponentFixture<AdmisabilityCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmisabilityCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisabilityCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
