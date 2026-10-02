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
- http://localhost:3000/produtos/buscar?nome=mouse — pesquisa por nome

## Funcionalidades

- [x] Cadastro de produtos
- [x] Listagem de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [x] Cadastro de categorias (Desafio 1)
- [x] Produtos por categoria (Desafio 2)
- [x] Pesquisa de produtos por nome (extra)

## Desafios

- Desafio 1 — Categorias e relacionamento com produtos: Model `Categoria` (id, nome) com relação 1:N (`Categoria.hasMany(Produto)` / `Produto.belongsTo(Categoria)` via `categoriaId`, `SET NULL` ao excluir). CRUD de categorias em `/categorias` e `select` de categoria nos formulários de produto; listagem de produtos exibe a categoria (`include`).
- Desafio 2 — Consulta de produtos por categoria: rota `GET /produtos/categoria/:id` que busca a categoria (`findByPk`) e filtra os produtos (`findAll({ where: { categoriaId } })` com `include`). Página `views/produtos/por-categoria.ejs` exibe só os produtos daquela categoria. Seleção disponível no filtro da página `/produtos` e no link "Ver produtos" de cada linha em `/categorias`; categoria inexistente redireciona para `/produtos`.
- Desafio extra — Pesquisa de produtos: rota `GET /produtos/buscar?nome=termo` que consulta com `findAll({ where: { nome: { [Op.like]: '%termo%' } } })`, retornando produtos cujo nome contém o termo. Página `views/produtos/buscar.ejs` com formulário de pesquisa e tabela de resultados; busca vazia exibe só o formulário.

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
│   │   ├── editar.ejs
│   │   ├── por-categoria.ejs   # Desafio 2 (filtro por categoria)
│   │   └── buscar.ejs          # Extra (pesquisa por nome)
│   └── categorias/
│       ├── index.ejs
│       ├── novo.ejs
│       └── editar.ejs
└── public/
```

Fluxo: Usuário → Página (View/EJS) → Rota (`routes/produtos.js`) → Controller → Model (`models/index.js`) → SQLite.
