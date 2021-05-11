import { TestBed } from '@angular/core/testing';

import { ArticlelistService } from './articlelist.service';

describe('ArticlelistService', () => {
  let service: ArticlelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
