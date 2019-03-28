import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobinwardPage } from './jobinward.page';

describe('JobinwardPage', () => {
  let component: JobinwardPage;
  let fixture: ComponentFixture<JobinwardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobinwardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobinwardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
