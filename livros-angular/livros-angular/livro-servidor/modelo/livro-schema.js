const banco = require('./conexao');

const LivroSchema = new banco.Schema({
  codigo: {
    type: Number,
    required: true,
    unique: true
  },
  codEditora: {
    type: Number,
    required: true
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
}, {
  timestamps: true,
  collection: 'livros'
});

const Livro = banco.model('Livro', LivroSchema);

module.exports = Livro;
