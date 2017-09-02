import { TestBed, inject } from '@angular/core/testing';

import { GetWeb3Service } from './get-web3.service';

describe('GetWeb3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetWeb3Service]
    });
  });

  it('should be created', inject([GetWeb3Service], (service: GetWeb3Service) => {
    expect(service).toBeTruthy();
  }));
});
