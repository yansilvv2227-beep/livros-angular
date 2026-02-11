var express = require('express');
var router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.status(201).json({ message: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir livro', error: error.message });
  }
});

router.delete('/:_id', async (req, res) => {
  try {
    const codigo = req.params._id;
    await excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir livro', error: error.message });
  }
});

module.exports = router;
