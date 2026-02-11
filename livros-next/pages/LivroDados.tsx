import { useRouter } from 'next/router'
import { useState } from 'react'
import { Livro } from '../types/Livro'
import { ControleLivros } from '../lib/controleLivros'

const controleLivros = new ControleLivros()

export default function LivroDados() {
  const router = useRouter()
  const [livro, setLivro] = useState<Livro>(new Livro('', 0, '', '', []))
  const [autoresText, setAutoresText] = useState('')

  const incluir = () => {
    const autores = autoresText.split('\n').filter(a => a.trim().length > 0)
    const novo = new Livro('', livro.codEditora, livro.titulo, livro.resumo, autores)

    controleLivros.incluir(novo).then(ok => {
      if (ok) router.push('/LivroLista')
    })
  }

  return (
    <main>
      <h1>Adicionar Livro (Next)</h1>
      <label>Título<input value={livro.titulo} onChange={e => setLivro({ ...livro, titulo: e.target.value })} /></label>
      <label>Resumo<input value={livro.resumo} onChange={e => setLivro({ ...livro, resumo: e.target.value })} /></label>
      <label>Autores<textarea value={autoresText} onChange={e => setAutoresText(e.target.value)} /></label>
      <button onClick={incluir}>Incluir</button>
    </main>
  )
}
