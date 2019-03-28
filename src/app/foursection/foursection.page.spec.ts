import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoursectionPage } from './foursection.page';

describe('FoursectionPage', () => {
  let component: FoursectionPage;
  let fixture: ComponentFixture<FoursectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoursectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoursectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
