import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service.service';

describe('Movie.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });
});
