import { TestBed } from '@angular/core/testing';

import { JasonplaceholderService } from './jasonplaceholder.service';

describe('JasonplaceholderService', () => {
  let service: JasonplaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JasonplaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
