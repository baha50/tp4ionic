import { TestBed } from '@angular/core/testing';

import { FoldserviceService } from './foldservice.service';

describe('FoldserviceService', () => {
  let service: FoldserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoldserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
