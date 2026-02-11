export interface LivroMongo {
  _id: string | null;
  codigo: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}
