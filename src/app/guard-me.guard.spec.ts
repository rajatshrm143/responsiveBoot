import { TestBed } from '@angular/core/testing';

import { GuardMeGuard } from './guard-me.guard';

describe('GuardMeGuard', () => {
  let guard: GuardMeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardMeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
