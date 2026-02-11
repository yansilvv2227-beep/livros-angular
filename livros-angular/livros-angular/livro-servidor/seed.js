const mongoose = require('mongoose');
const connectDB = require('./config/database');
const Editora = require('./models/Editora');
const Livro = require('./models/Livro');

const seedDatabase = async () => {
  try {
    await connectDB();

    // Limpar dados existentes
    await Editora.deleteMany({});
    await Livro.deleteMany({});

    // Inserir editoras
    const editoras = await Editora.insertMany([
      { codEditora: 1, nome: 'Editora A' },
      { codEditora: 2, nome: 'Editora B' },
      { codEditora: 3, nome: 'Editora C' }
    ]);

    // Inserir livros
    const livros = await Livro.insertMany([
      {
        codigo: 1,
        codEditora: 1,
        titulo: 'Por que meu código não funciona?',
        resumo: 'Tutorial de debugging usando memes e café',
        autores: ['Stack Overflow']
      },
      {
        codigo: 2,
        codEditora: 2,
        titulo: 'TypeScript: A linguagem que ama vírgulas',
        resumo: 'Aprendendo a aceitar erros de tipo em tempo de compilação',
        autores: ['Linus Torvalds']
      },
      {
        codigo: 3,
        codEditora: 3,
        titulo: 'Standalone vs NgModule: A escolha que ninguém pediu',
        resumo: 'Refatorando código de 2019 para Angular 17 enquanto chora',
        autores: ['Dev que herdou código legado']
      }
    ]);

    console.log('Banco de dados populado com sucesso!');
    console.log(`${editoras.length} editoras inseridas`);
    console.log(`${livros.length} livros inseridos`);

    process.exit(0);
  } catch (error) {
    console.error('Erro ao popular banco de dados:', error);
    process.exit(1);
  }
};

seedDatabase();
