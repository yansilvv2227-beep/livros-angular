# Servidor Express com Mongoose e MongoDB

## Descrição
Servidor Node.js com Express que fornece uma API RESTful para gerenciar Livros e Editoras usando MongoDB.

## Estrutura do Projeto

```
livro-servidor/
├── config/
│   └── database.js          # Configuração de conexão com MongoDB
├── models/
│   ├── Editora.js           # Schema da Editora
│   └── Livro.js             # Schema do Livro
├── routes/
│   ├── livros.js            # Rotas da API de Livros
│   ├── editoras.js          # Rotas da API de Editoras
│   ├── index.js             # Rota raiz
│   └── users.js             # Rota de usuários
├── app.js                   # Configuração principal do Express
├── package.json             # Dependências do projeto
├── seed.js                  # Script para popular o banco de dados
└── bin/www                  # Inicializador do servidor
```

## Pré-requisitos

- Node.js instalado
- MongoDB rodando localmente (porta 27017)
- Banco de dados "livraria" criado no MongoDB

## Instalação

1. Instalar as dependências:
```bash
npm install
```

2. Popular o banco de dados com dados iniciais:
```bash
node seed.js
```

## Executar o Servidor

```bash
npm start
```

O servidor iniciará na porta **3000**

## API Endpoints

### Livros

#### GET - Obter todos os livros
```
GET http://localhost:3000/api/livros
```

**Resposta:**
```json
[
  {
    "_id": "...",
    "codigo": 1,
    "codEditora": 1,
    "titulo": "Por que meu código não funciona?",
    "resumo": "Tutorial de debugging usando memes e café",
    "autores": ["Stack Overflow"]
  }
]
```

#### GET - Obter um livro por ID
```
GET http://localhost:3000/api/livros/:id
```

#### POST - Criar um novo livro
```
POST http://localhost:3000/api/livros
Content-Type: application/json

{
  "codigo": 4,
  "codEditora": 1,
  "titulo": "Novo Livro",
  "resumo": "Descrição do livro",
  "autores": ["Autor 1", "Autor 2"]
}
```

#### PUT - Atualizar um livro
```
PUT http://localhost:3000/api/livros/:id
Content-Type: application/json

{
  "titulo": "Novo Título",
  "resumo": "Novo resumo"
}
```

#### DELETE - Deletar um livro
```
DELETE http://localhost:3000/api/livros/:id
```

### Editoras

#### GET - Obter todas as editoras
```
GET http://localhost:3000/api/editoras
```

#### GET - Obter uma editora por ID
```
GET http://localhost:3000/api/editoras/:id
```

#### POST - Criar uma nova editora
```
POST http://localhost:3000/api/editoras
Content-Type: application/json

{
  "codEditora": 4,
  "nome": "Editora D"
}
```

#### PUT - Atualizar uma editora
```
PUT http://localhost:3000/api/editoras/:id
Content-Type: application/json

{
  "nome": "Novo Nome"
}
```

#### DELETE - Deletar uma editora
```
DELETE http://localhost:3000/api/editoras/:id
```

## CORS

O servidor tem CORS habilitado, permitindo requisições de qualquer origem. Isso permite que o frontend Angular se comunique com esta API.

## Banco de Dados

**Database:** livraria

**Collections:**
- `editoras` - Contém dados das editoras
- `livros` - Contém dados dos livros

## Dependências Instaladas

- **express** - Framework web
- **mongoose** - ODM para MongoDB
- **cors** - Gerenciador de CORS
- **ejs** - Template engine
- **morgan** - Logger HTTP
- **cookie-parser** - Parser de cookies

## Versões

- Node.js: v18+ (recomendado)
- MongoDB: 4.0+
- Express: 4.16.1
- Mongoose: 9.2.1
