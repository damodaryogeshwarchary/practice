import { TestBed } from '@angular/core/testing';

import { TobedoneService } from './tobedone.service';

describe('TobedoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TobedoneService = TestBed.get(TobedoneService);
    expect(service).toBeTruthy();
  });
});
