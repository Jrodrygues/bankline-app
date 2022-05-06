import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoesListComponent } from './movimentacao-list.component';

describe('MovimentacaoListComponent', () => {
  let component: MovimentacaoesListComponent;
  let fixture: ComponentFixture<MovimentacaoesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
