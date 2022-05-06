import { Component, OnInit } from '@angular/core';
import { MovimentacaoesService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacaoes-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})


export class MovimentacaoesListComponent implements OnInit {
  movimentacoes:any;

  constructor(private movimentacaoesService: MovimentacaoesService) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }
  listMovimentacoes(): void {
    this.movimentacaoesService.list()
      .subscribe(
        data => {
          this.movimentacoes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}