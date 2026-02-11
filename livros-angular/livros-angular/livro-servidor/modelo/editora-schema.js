const banco = require('./conexao');

const EditoraSchema = new banco.Schema({
  codEditora: {
    type: Number,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'editoras'
});

const Editora = banco.model('Editora', EditoraSchema);

module.exports = Editora;
