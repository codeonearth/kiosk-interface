import { TestBed } from '@angular/core/testing';

import { KioskService } from '../kiosk/kiosk';

describe('Kiosk', () => {
  let service: KioskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KioskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
