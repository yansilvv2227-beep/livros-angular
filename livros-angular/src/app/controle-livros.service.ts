import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { LivroMongo } from './livro-mongo';

const baseURL = 'http://localhost:3030/livros';

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {

  async obterLivros(): Promise<Array<Livro>> {
    const res = await fetch(baseURL);
    const arr: LivroMongo[] = await res.json();
    return arr.map(lm => new Livro(lm._id ?? '', lm.codEditora, lm.titulo, lm.resumo, lm.autores));
  }

  async incluir(livro: Livro): Promise<boolean> {
    // Gerar um código único se estiver vazio
    const codigo = livro.codigo && livro.codigo.trim() !== '' 
      ? livro.codigo 
      : Date.now().toString(36) + Math.random().toString(36).substr(2);

    const lm: LivroMongo = {
      _id: null,
      codigo: codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };

    const res = await fetch(baseURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lm)
    });

    return res.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const res = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return res.ok;
  }

}
