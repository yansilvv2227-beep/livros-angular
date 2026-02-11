const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  codEditora: {
    type: Number,
    required: true,
    ref: 'Editora'
  },
  titulo: {
    type: String,
    required: true
  },
  resumo: {
    type: String,
    required: true
  },
  autores: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Livro', livroSchema);
