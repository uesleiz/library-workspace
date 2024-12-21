import { TestBed } from '@angular/core/testing';

import { ZchartsService } from './zcharts.service';

describe('ZchartsService', () => {
  let service: ZchartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZchartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
