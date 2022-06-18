import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoasService } from 'src/app/Pessoas.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoas: Pessoa[] | undefined
  formulario: any;
  tituloFormulario!: string;
  alert:boolean | undefined;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
      this.tituloFormulario = 'Adicionar Pessoa';

      this.pessoasService.PegarTodos().subscribe(resultado => {
        this.pessoas = resultado;
      })

      this.alert = false;
      this.formulario = new  FormGroup({
      //forms controle são os inputs
      nome: new FormControl(null),
      sobrenNme: new FormControl(null),
      idade : new FormControl(null),
      profissao: new FormControl(null)
    });
  }

  EnviarFormulario():void {
    const pessoa: Pessoa = this.formulario.value
    this.pessoasService.SalvarPessoa(pessoa)
    .subscribe(
      (resultado) =>{(this.alert = !this.alert)
    });
    timer(3000).subscribe(x => { location.reload()})
  }

}
