import { TestBed } from '@angular/core/testing';

import { SecretsAPIService } from './secrets-api.service';

describe('SecretsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecretsAPIService = TestBed.get(SecretsAPIService);
    expect(service).toBeTruthy();
  });
});
