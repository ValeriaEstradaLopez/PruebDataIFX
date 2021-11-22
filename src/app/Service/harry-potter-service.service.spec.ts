import { TestBed } from '@angular/core/testing';

import { HarryPotterServiceService } from './harry-potter-service.service';

describe('HarryPotterServiceService', () => {
  let service: HarryPotterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryPotterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
