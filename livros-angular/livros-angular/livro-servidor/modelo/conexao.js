const banco = require('mongoose');

banco.connect('mongodb://localhost:27017/livraria');

module.exports = banco;
