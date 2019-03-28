import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionDatesPage } from './action-dates.page';

describe('ActionDatesPage', () => {
  let component: ActionDatesPage;
  let fixture: ComponentFixture<ActionDatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionDatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
