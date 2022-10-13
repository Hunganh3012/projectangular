import { TestBed } from '@angular/core/testing';

import { ProductAnnounService } from './product-announ.service';

describe('ProductAnnounService', () => {
  let service: ProductAnnounService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAnnounService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
