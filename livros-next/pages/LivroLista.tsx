import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Livro } from '../types/Livro'
import { ControleLivros } from '../lib/controleLivros'

const controleLivros = new ControleLivros()

export default function LivroLista() {
  const [livros, setLivros] = useState<Livro[]>([])
  const [carregado, setCarregado] = useState(false)

  useEffect(() => {
    controleLivros.obterLivros().then(r => {
      setLivros(r)
      setCarregado(true)
    })
  }, [carregado])

  const excluir = (codigo: string) => {
    controleLivros.excluir(codigo).then(() => {
      setCarregado(false)
    })
  }

  return (
    <main>
      <h1>Lista de Livros</h1>
      <Link href="/LivroDados">Adicionar</Link>
      <ul>
        {livros.map((l, index) => (
          <li key={index}>
            {l.titulo} <button onClick={() => excluir(l.codigo)}>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
