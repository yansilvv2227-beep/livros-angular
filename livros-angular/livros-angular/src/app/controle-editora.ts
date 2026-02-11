import { Injectable } from '@angular/core';
import { Editora } from './editora';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root',
})
export class ControleEditora {

  editoras: Array<Editora> = [JSON.parse('{"codEditora": 1, "nome": "Editora A"}'),
  JSON.parse('{"codEditora": 2, "nome": "Editora B"}'),
  JSON.parse('{"codEditora": 3, "nome": "Editora C"}')];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter(e => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}
  