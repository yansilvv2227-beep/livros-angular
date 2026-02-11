const mongoose = require('mongoose');

const conectar = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/livros');
    console.log('✅ Conectado ao MongoDB');
    
    const db = mongoose.connection.db;
    const colecao = db.collection('livros');
    
    const livros = await colecao.find({}).toArray();
    
    console.log('\n📚 LIVROS NO BANCO DE DADOS:');
    console.log('================================');
    console.log(`Total de livros: ${livros.length}\n`);
    
    livros.forEach((livro, index) => {
      console.log(`${index + 1}. ${livro.titulo}`);
      console.log(`   Autor: ${livro.autor}`);
      console.log(`   Editora: ${livro.editora}`);
      if (livro.paginas) console.log(`   Páginas: ${livro.paginas}`);
      console.log(`   ID: ${livro._id}`);
      console.log('');
    });
    
    await mongoose.connection.close();
    console.log('✅ Desconectado do MongoDB');
  } catch (erro) {
    console.error('❌ Erro:', erro.message);
  }
};

conectar();
