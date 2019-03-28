import { TestBed } from '@angular/core/testing';

import { GlobaldatatransferService } from './globaldatatransfer.service';

describe('GlobaldatatransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobaldatatransferService = TestBed.get(GlobaldatatransferService);
    expect(service).toBeTruthy();
  });
});
