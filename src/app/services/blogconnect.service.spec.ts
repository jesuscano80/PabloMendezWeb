import { TestBed } from '@angular/core/testing';

import { BlogconnectService } from './blogconnect.service';

describe('BlogconnectService', () => {
  let service: BlogconnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogconnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
