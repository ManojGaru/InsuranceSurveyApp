import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Case2Page } from './case2.page';

describe('Case2Page', () => {
  let component: Case2Page;
  let fixture: ComponentFixture<Case2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Case2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Case2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
