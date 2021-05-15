import { TestBed } from '@angular/core/testing';
import { BiographyService } from './biography.service';
import { Biography } from '../models/biography';

describe('BiographyService', () => {

  let service: BiographyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiographyService);
  });

  it('Should be create a service', () => {
    expect(service).toBeTruthy();
  });
});
