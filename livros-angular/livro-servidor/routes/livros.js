const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// GET - Obter todos os livros
router.get('/', async (req, res, next) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao obter livros', erro: erro.message });
  }
});

// POST - Incluir um novo livro
router.post('/', async (req, res, next) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro', erro: erro.message });
  }
});

// DELETE - Excluir um livro pelo código (_id)
router.delete('/:codigo', async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro', erro: erro.message });
  }
});

module.exports = router;
