import { TestBed } from '@angular/core/testing';

import { NgConfigcatPublicapiService } from './ng-configcat-publicapi.service';

describe('NgConfigcatPublicapiService', () => {
  let service: NgConfigcatPublicapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgConfigcatPublicapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
