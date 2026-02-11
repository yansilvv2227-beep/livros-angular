const mongoose = require('mongoose');

const editoraSchema = new mongoose.Schema({
  codEditora: {
    type: Number,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Editora', editoraSchema);
