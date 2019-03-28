import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPreviewPage } from './doc-preview.page';

describe('DocPreviewPage', () => {
  let component: DocPreviewPage;
  let fixture: ComponentFixture<DocPreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocPreviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
