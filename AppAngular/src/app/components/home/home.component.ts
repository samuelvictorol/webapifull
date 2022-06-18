import { Component, NgModule, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoasService } from 'src/app/Pessoas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mostra = true;
  pessoas: Pessoa[] = [];
  pessoaX: any;
  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.pessoasService.PegarTodos().subscribe((resultado) => {
      this.pessoas = resultado;
    });
  }

  Excluir(id: number): void {
    this.pessoasService.ExcluirPessoa(id).subscribe((resultado) => {
      this.pessoas = resultado;
    });
    location.reload();
  }

  Editar(pessoa: Pessoa): void {
    this.pessoaX = pessoa
    this.pessoasService.AtualizarPessoa(this.pessoaX)
    this.pessoasService.SalvarPessoa(this.pessoaX).subscribe((resultado) => {this.pessoaX = resultado;})
  }

  SetPessoa(pessoa: Pessoa): void {
    this.pessoaX = pessoa;
  }

  GetPessoa(): Pessoa {
    return this.pessoaX;
  }
}
