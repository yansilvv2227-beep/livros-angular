import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';

@Component({
  selector: 'app-livro-lista',
  imports: [CommonModule],
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css',
})
export class LivroLista implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
