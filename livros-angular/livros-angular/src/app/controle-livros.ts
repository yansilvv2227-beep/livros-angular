import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {
  
  livros: Array<Livro> = [
    JSON.parse('{"codigo": 1, "codEditora": 1, "titulo": "Por que meu código não funciona?", "resumo": "Tutorial de debugging usando memes e café", "autores": ["Stack Overflow"]}'),
    JSON.parse('{"codigo": 2, "codEditora": 2, "titulo": "TypeScript: A linguagem que ama vírgulas", "resumo": "Aprendendo a aceitar erros de tipo em tempo de compilação", "autores": ["Linus Torvalds"]}'),
    JSON.parse('{"codigo": 3, "codEditora": 3, "titulo": "Standalone vs NgModule: A escolha que ninguém pediu", "resumo": "Refatorando código de 2019 para Angular 17 enquanto chora", "autores": ["Dev que herdou código legado"]}')

  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
