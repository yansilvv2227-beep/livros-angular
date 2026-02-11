var express = require('express');
var router = express.Router();
const Editora = require('../models/Editora');

// GET - Obter todas as editoras
router.get('/', async (req, res) => {
  try {
    const editoras = await Editora.find();
    res.json(editoras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET - Obter uma editora por ID
router.get('/:id', async (req, res) => {
  try {
    const editora = await Editora.findById(req.params.id);
    if (!editora) {
      return res.status(404).json({ message: 'Editora não encontrada' });
    }
    res.json(editora);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Criar uma nova editora
router.post('/', async (req, res) => {
  const editora = new Editora({
    codEditora: req.body.codEditora,
    nome: req.body.nome
  });

  try {
    const novaEditora = await editora.save();
    res.status(201).json(novaEditora);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT - Atualizar uma editora
router.put('/:id', async (req, res) => {
  try {
    const editora = await Editora.findById(req.params.id);
    if (!editora) {
      return res.status(404).json({ message: 'Editora não encontrada' });
    }

    if (req.body.codEditora) editora.codEditora = req.body.codEditora;
    if (req.body.nome) editora.nome = req.body.nome;

    const editoraAtualizada = await editora.save();
    res.json(editoraAtualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Deletar uma editora
router.delete('/:id', async (req, res) => {
  try {
    const editora = await Editora.findById(req.params.id);
    if (!editora) {
      return res.status(404).json({ message: 'Editora não encontrada' });
    }
    await editora.deleteOne();
    res.json({ message: 'Editora deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
