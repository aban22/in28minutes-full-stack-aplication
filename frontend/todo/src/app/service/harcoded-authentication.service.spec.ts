import { TestBed } from '@angular/core/testing';

import { HarcodedAuthenticationService } from './harcoded-authentication.service';

describe('HarcodedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HarcodedAuthenticationService = TestBed.get(HarcodedAuthenticationService);
    expect(service).toBeTruthy();
  });
});
