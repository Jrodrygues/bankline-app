import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoesService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacaoes-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})


export class MovimentacaoesListComponent implements OnInit {
  movimentacoes:any;
  correntista:any={};
  correntistas:any;

  constructor(
    private movimentacaoesService: MovimentacaoesService,
    private correntistaService: CorrentistaService,
    ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  listMovimentacoes(): void {
    this.movimentacaoesService.findByIdConta(this.correntista.id)
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}