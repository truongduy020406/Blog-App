import { TestBed } from '@angular/core/testing';

import { CommmentsService } from './commments.service';

describe('CommmentsService', () => {
  let service: CommmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
