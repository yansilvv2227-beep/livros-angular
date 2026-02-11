# Projeto Livros - Multi-Framework

Projeto acadêmico que implementa um sistema de gerenciamento de livros em **três frameworks diferentes**: Angular, React e Next.js, todos consumindo a mesma API de backend.

## 📋 Descrição

O projeto demonstra como implementar a mesma funcionalidade em diferentes frameworks JavaScript/TypeScript, seguindo as melhores práticas de cada um. Inclui um backend Express.js com MongoDB para persistência de dados.

**Funcionalidades:**
- ✅ Listar todos os livros
- ✅ Criar novo livro
- ✅ Deletar livro
- ✅ Interface responsiva em 3 frameworks

---

## 🛠️ Tecnologias

### Frontend
- **Angular 21+** - Standalone components, SSR, TypeScript
- **React** - Vite, React Router, Fetch API
- **Next.js** - Pages Router, TypeScript, SSR

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **MongoDB** - Banco de dados

---

## 📦 Requisitos

Antes de começar, instale:

1. **Node.js** (v18+)
   - Download: https://nodejs.org/
   - Verifique: `node --version`

2. **MongoDB** (v5.0+)
   - Download: https://www.mongodb.com/try/download/community
   - Ou use MongoDB Atlas (nuvem, gratuito)

3. **Git** (opcional, para clonar)
   - Download: https://git-scm.com/

---

## 📁 Estrutura do Projeto

```
clientes/
├── livros-angular/          # Projeto Angular
│   ├── src/app/
│   │   ├── livro.ts                    # Modelo de dados
│   │   ├── controle-livros.service.ts  # Serviço (integra com API)
│   │   ├── livro-dados/                # Formulário para criar livro
│   │   └── livro-lista/                # Lista de livros
│   ├── livro-servidor/      # Backend Express.js
│   │   ├── app.js           # Configuração da API
│   │   ├── package.json
│   │   └── (schema MongoDB)
│   └── package.json
│
├── livros-react/            # Projeto React + Vite
│   ├── src/
│   │   ├── model/Livro.ts   # Modelo de dados
│   │   ├── controle/ControleLivros.ts  # Serviço
│   │   ├── LivroLista.jsx            # Lista
│   │   └── LivroDados.jsx            # Formulário
│   └── package.json
│
├── livros-next/             # Projeto Next.js
│   ├── types/Livro.ts       # Modelo de dados
│   ├── lib/controleLivros.ts # Serviço
│   ├── pages/
│   │   ├── LivroLista.tsx   # Lista
│   │   └── LivroDados.tsx   # Formulário
│   └── package.json
│
└── README.md                # Este arquivo
```

---

## 🚀 Guia de Instalação e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/yansilvv2227-beep/livros-angular.git
cd clientes
```

### 2️⃣ Instalar dependências (todos os projetos)

```bash
# Livros Angular
cd livros-angular
npm install
cd livro-servidor
npm install
cd ../..

# Livros React
cd livros-react
npm install
cd ..

# Livros Next.js
cd livros-next
npm install
cd ..
```

### 3️⃣ Configurar MongoDB

**Opção A: MongoDB Local**
```bash
# Se tiver MongoDB instalado
mongod
```

**Opção B: MongoDB Atlas (Nuvem)**
1. Crie conta em: https://www.mongodb.com/cloud/atlas
2. Crie um cluster gratuito
3. Copie a string de conexão
4. Edite `livro-servidor/app.js` e substitua a URL do MongoDB

### 4️⃣ Iniciar o Backend (Necessário para todos os projetos)

```bash
cd livros-angular/livro-servidor
npm start
```

O servidor estará rodando em: **http://localhost:3030**

Teste em seu navegador: http://localhost:3030/livros

### 5️⃣ Iniciar o Frontend (escolha um ou mais)

#### Angular
```bash
cd livros-angular
ng serve --open
# Ou: npm start
# Acesse: http://localhost:4200
```

#### React
```bash
cd livros-react
npm run dev
# Acesse: http://localhost:5173
```

#### Next.js
```bash
cd livros-next
npm run dev
# Acesse: http://localhost:3000
```

---

## 📡 API Endpoints

### Base URL: `http://localhost:3030/livros`

#### GET /livros
Retorna lista de todos os livros.

**Resposta (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "codigo": "abc123",
    "codEditora": 1,
    "titulo": "Clean Code",
    "resumo": "Um livro sobre código limpo",
    "autores": ["Robert Martin"]
  }
]
```

#### POST /livros
Cria um novo livro.

**Request Body:**
```json
{
  "codigo": "xyz789",
  "codEditora": 2,
  "titulo": "The Pragmatic Programmer",
  "resumo": "Guia prático de programação",
  "autores": ["David Thomas", "Andrew Hunt"]
}
```

**Resposta (201):** Livro criado com sucesso

#### DELETE /livros/:id
Deleta um livro pelo ID.

**Resposta (200):** Livro deletado com sucesso

---

## ✅ Testando as Funcionalidades

1. **Listar livros**: Abra qualquer frontend, você verá a lista inicial
2. **Criar livro**: Clique em "Criar novo livro" e preencha o formulário
3. **Deletar livro**: Clique no botão deletar de qualquer livro da lista

---

## 🔑 Pontos Importantes

### Angular
- ✅ Standalone components (sem NgModule)
- ✅ Change detection manual com `ChangeDetectorRef`
- ✅ Serviço `ControleLivros` que chama a API
- ✅ SSR habilitado

### React
- ✅ Vite para build rápido
- ✅ React Router para navegação
- ✅ Hooks (useState, useEffect)
- ✅ Fetch API para requisições

### Next.js
- ✅ Pages Router
- ✅ TypeScript nativo
- ✅ SSR automático
- ✅ Integração com Fetch API

### Backend
- ✅ Express.js com CORS habilitado
- ✅ MongoDB/Mongoose para persistência
- ✅ Validação de schema
- ✅ Índice único no campo `codigo`

---

## 🐛 Troubleshooting

### "Porta 3030 já está em uso"
```bash
# Windows PowerShell
Stop-Process -Id (netstat -ano | Select-String ":3030" | ForEach-Object { ($_ -split "\s+")[-1] } | Select-Object -First 1) -Force
```

### "Erro de conexão com MongoDB"
- Verifique se MongoDB está rodando
- Confira a string de conexão em `livro-servidor/app.js`
- Verifique firewall/antivírus

### "node_modules não encontrado"
```bash
# Dentro de cada projeto, execute:
npm install
```

---

## 📝 Notas da Implementação

1. **Modelo de Dados Unificado**: Os três frameworks usam a mesma estrutura `Livro`
2. **API RESTful**: Backend segue padrões REST
3. **Async/Await**: Todos os projetos usam Promises e .then()
4. **Validação de Formulário**: Angular implementa validação nativa
5. **Geração de ID**: `codigo` é gerado automaticamente no frontend se não fornecido

---

## 🎓 Objetivo Acadêmico

Este projeto demonstra:
- Implementação da mesma funcionalidade em 3 frameworks
- Integração com API REST
- Boas práticas de cada framework
- Estrutura de projeto escalável
- Separação de concerns (Model, Service, Component)

---

## 👨‍💻 Autor

Projeto desenvolvido como trabalho acadêmico.

---

## 📞 Suporte

Se tiver dúvidas ao executar o projeto, verifique:
1. Se Node.js está instalado: `node --version`
2. Se MongoDB está rodando
3. Se as dependências foram instaladas: `npm install`
4. As portas (3000, 3030, 4200, 5173) estão livres

---

**Última atualização**: Fevereiro 2026
