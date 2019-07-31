import { TestBed } from '@angular/core/testing';

import { ServiceHttpService } from './service-http.service';

describe('ServiceHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceHttpService = TestBed.get(ServiceHttpService);
    expect(service).toBeTruthy();
  });
});
