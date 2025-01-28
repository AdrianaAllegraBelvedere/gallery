import { TestBed } from '@angular/core/testing';

import { ImgServicesService } from './img-services.service';

describe('ImgServicesService', () => {
  let service: ImgServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
