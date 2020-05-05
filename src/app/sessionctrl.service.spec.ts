import { TestBed } from '@angular/core/testing';

import { SessionctrlService } from './sessionctrl.service';

describe('SessionctrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionctrlService = TestBed.get(SessionctrlService);
    expect(service).toBeTruthy();
  });
});
