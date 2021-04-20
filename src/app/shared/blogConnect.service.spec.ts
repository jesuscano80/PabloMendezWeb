import { TestBed } from '@angular/core/testing';

import { BlogConnectService } from './blogConnect.service';

describe('BlogconnectService', () => {
  let service: BlogConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
