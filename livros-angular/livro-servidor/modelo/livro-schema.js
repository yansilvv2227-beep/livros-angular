const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
  editora: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: false
  },
  paginas: {
    type: Number,
    required: false
  },
  ano: {
    type: Number,
    required: false
  },
  descricao: {
    type: String,
    required: false
  }
});

module.exports = banco.model('livro', LivroSchema);
