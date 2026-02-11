import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  imports: [CommonModule],
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css',
})
export class LivroLista implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];
  public carregado: boolean = false;

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.carregado = false;
    this.servLivros.obterLivros().then(result => {
      this.livros = result;
      this.carregado = true;
      this.cdr.detectChanges();
    });
  }

  excluir = (codigo: string) => {
    this.servLivros.excluir(codigo).then(() => {
      // marcar como não carregado ao final da exclusão
      this.carregado = false;
      // recarregar lista
      this.servLivros.obterLivros().then(result => {
        this.livros = result;
        this.carregado = true;
        this.cdr.detectChanges();
      });
    });
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
