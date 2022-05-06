import { TestBed } from '@angular/core/testing';

import { MovimentacaoesService } from './movimentacao.service';

describe('MovimentacaoesService', () => {
  let service: MovimentacaoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
