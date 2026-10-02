# Cadastro de Produtos — MVC

Projeto da Atividade Prática Web IIII: Desenvolvimento Web com framework MVC.

Stack: Node.js, Express, EJS, Sequelize e SQLite.

## Integrante

- Nome: Gabriel Domingues dos Santos — RM: 20240336

## Como executar

```bash
npm install
npm start
```

Abra o navegador em:

- http://localhost:3000 — página inicial
- http://localhost:3000/produtos — CRUD de produtos
- http://localhost:3000/categorias — CRUD de categorias

## Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [x] Cadastro de categorias (Desafio 1)
- [ ] Produtos por categoria (Desafio 2)
- [ ] Pesquisa de produtos (extra)

## Desafios

- Desafio 1 — Categorias e relacionamento com produtos: Model `Categoria` (id, nome) com relação 1:N (`Categoria.hasMany(Produto)` / `Produto.belongsTo(Categoria)` via `categoriaId`, `SET NULL` ao excluir). CRUD de categorias em `/categorias` e `select` de categoria nos formulários de produto; listagem de produtos exibe a categoria (`include`).
- Desafio 2 — Consulta de produtos por categoria: _(a implementar)_

## Estrutura (MVC)

```text
APIcadastro/
├── app.js
├── package.json
├── database.sqlite (gerado ao rodar)
├── bin/www
├── models/index.js        # Models Produto e Categoria + conexão Sequelize
├── routes/
│   ├── index.js           # home
│   ├── produtos.js        # Controller/rotas do CRUD de produtos
│   └── categorias.js      # Controller/rotas do CRUD de categorias
├── views/
│   ├── index.ejs
│   ├── produtos/
│   │   ├── index.ejs
│   │   ├── novo.ejs
│   │   └── editar.ejs
│   └── categorias/
│       ├── index.ejs
│       ├── novo.ejs
│       └── editar.ejs
└── public/
```

Fluxo: Usuário → Página (View/EJS) → Rota (`routes/produtos.js`) → Controller → Model (`models/index.js`) → SQLite.
"# Ativ_Pratica_PWEB_III" 
