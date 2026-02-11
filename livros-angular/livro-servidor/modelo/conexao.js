const banco = require('mongoose');

banco.connect('mongodb://localhost:27017/livros');

module.exports = banco;
