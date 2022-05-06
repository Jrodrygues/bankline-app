import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentacaoesNewComponent } from './movimentacao-new.component';

describe('MovimentacaoesNewComponent', () => {
  let component: MovimentacaoesNewComponent;
  let fixture: ComponentFixture<MovimentacaoesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovimentacaoesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimentacaoesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
