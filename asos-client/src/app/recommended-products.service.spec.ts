import { TestBed, inject } from '@angular/core/testing';

import { RecommendedProductsService } from './recommended-products.service';

describe('RecommendedProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecommendedProductsService]
    });
  });

  it('should be created', inject([RecommendedProductsService], (service: RecommendedProductsService) => {
    expect(service).toBeTruthy();
  }));
});
